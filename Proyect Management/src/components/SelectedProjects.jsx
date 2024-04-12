import React from "react";
import Task from "./Task";

function SelectedProjects({
  project,
  onDeleteProyect,
  tasks,
  onCreateTask,
  onDeleteTask
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });

  console.log(tasks);
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            onClick={() => {
              onDeleteProyect(project.id);
            }}
            className="text-stone-600 hover:text-stone-950"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Task
        onCreateTask={onCreateTask}
        onDeleteTask={onDeleteTask}
        selectedProjectId={project.id}
        tasks={tasks}
      />
    </div>
  );
}

export default SelectedProjects;
