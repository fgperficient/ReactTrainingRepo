import ProjectSidebar from "./components/ProjectSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProjects from "./components/NewProjects";
import { useState } from "react";
import SelectedProjects from "./components/SelectedProjects";

function App() {
  const [projectsState, setProyectsState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: []
  });

  const handleSelectProjects = id => {
    setProyectsState(prevState => {
      return { ...prevState, selectedProject: id };
    });
  };

  const handleStartAddProjects = () => {
    setProyectsState(prevState => {
      return { ...prevState, selectedProject: null };
    });
  };

  const handleCancelAddProjects = () => {
    setProyectsState(prevState => {
      return { ...prevState, selectedProject: undefined };
    });
  };

  const handleAddProject = projectData => {
    setProyectsState(prevState => {
      const project = {
        ...projectData,
        id: Math.random()
      };
      return {
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects, project]
      };
    });
  };

  const handleDeleteProject = id => {
    setProyectsState(prevState => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter(i => i.id !== id)
      };
    });
  };

  const handleCreateTask = newTask => {
    setProyectsState(prevState => {
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      };
    });
  };

  const handleDeleteTask = id => {
    setProyectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== id && task.idProject)
      };
    });
  };

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddProjects}
        projects={projectsState.projects}
        onSelectProject={handleSelectProjects}
        selectedProyectId={projectsState.selectedProject}
      />
      {projectsState.selectedProject === null && (
        <NewProjects
          onCancelAddProject={handleCancelAddProjects}
          onSaveNewProyect={handleAddProject}
        />
      )}
      {projectsState.selectedProject === undefined && (
        <NoProjectSelected onStartAddProject={handleStartAddProjects} />
      )}
      {projectsState.selectedProject && (
        <SelectedProjects
          project={projectsState.projects.find(
            i => i.id === projectsState.selectedProject
          )}
          onDeleteProyect={handleDeleteProject}
          tasks={
            projectsState.tasks !== undefined
              ? projectsState.tasks.filter(
                  i => i.idProject === projectsState.selectedProject
                )
              : []
          }
          onCreateTask={handleCreateTask}
          onDeleteTask={handleDeleteTask}
        />
      )}
    </main>
  );
}

export default App;
