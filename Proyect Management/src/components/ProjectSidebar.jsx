import React from "react";
import Button from "./Button";

function ProjectSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProyectId
}) {
  return (
    <aside className="w/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}> + Add a Project</Button>
      </div>
      <ul>
        {projects?.map(item => {
          let btnClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
          if (item.id === selectedProyectId) {
            btnClasses += " bg-stone-800 text-stone-200";
          } else {
            btnClasses += " text-stone-400";
          }
          return (
            <li key={item.id}>
              <button
                onClick={() => {
                  onSelectProject(item.id);
                }}
                className={btnClasses}
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default ProjectSidebar;
