import { useState } from "react";

function NewTask({ onCreateTask, selectedProjectId }) {
  const [taskName, setTaskName] = useState("");

  const handleChange = event => {
    setTaskName(event.target.value);
  };

  const handleClick = () => {
    if (taskName == "") {
      return;
    }
    const taskId = Math.random();
    const task = {
      id: taskId,
      name: taskName,
      idProject: selectedProjectId
    };
    onCreateTask(task);
    setTaskName("");
  };

  return (
    <div className="flex items-center gap-4">
      <input
        onChange={event => {
          handleChange(event);
        }}
        value={taskName}
        type="text"
        className="w-64 px-2 pt-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}

export default NewTask;
