import React from "react";
import NewTask from "./NewTask";

function Task({ onCreateTask, onDeleteTask, selectedProjectId, tasks }) {
  return (
    <section>
      <h2 className="text-2xl fond-bold text-stone-700 my-4">Taks</h2>
      <NewTask
        onCreateTask={onCreateTask}
        selectedProjectId={selectedProjectId}
      />
      {tasks.length == 0 && (
        <p className="text-stone-800 mb-4">
          this project does not have any taks
        </p>
      )}
      <ul className="p-4 mt-8 rounded-md bg-stone-100">
        {tasks.map(task => {
          return (
            <li
              key={task.id}
              className="flex items-center justify-between my-4"
            >
              <span>{task.name}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDeleteTask(task.id)}
              >
                Delete Task
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Task;
