import NoProject from "./components/NoProject";
import NewProject from "./components/NewProject";
import SideBar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";
import { useRef, useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectsId: undefined,
    projects: [],
  });
  const [projectSelected, setProjectSelected] = useState({});

  function handleAddTask(taskData) {
    const taskId = Math.random();
    const newTask = {
      text: taskData,
      id: taskId,
    };
    setProjectSelected((prevProject) => ({
      ...prevProject,
      tasks: [...prevProject.tasks, newTask],
    }));

    setProjectsState((prevState) => {
      const updatedProjects = prevState.projects.map((project) => {
        if (project.id === projectSelected.id) {
          const newTask = {
            text: taskData,
            id: Math.random(),
          };
          return {
            ...project,
            tasks: [...project.tasks, newTask],
          };
        }
        return project;
      });

      return {
        ...prevState,
        projects: updatedProjects,
      };
    });
  }

  function handleDeleteTask(taskId) {
    const updatedTasks = projectSelected.tasks.filter(
      (task) => task.id !== taskId
    );
    setProjectSelected((prevState) => ({
      ...prevState,
      tasks: updatedTasks,
    }));

    setProjectsState((prevState) => {
      const updatedProjects = prevState.projects.map((project) => {
        if (project.id === projectSelected.id) {
          const updatedTasks = project.tasks.filter(
            (task) => task.id !== taskId
          );
          return {
            ...project,
            tasks: updatedTasks,
          };
        }
        return project;
      });

      return {
        ...prevState,
        projects: updatedProjects,
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectsId: null,
      };
    });
  }

  function handleCreateProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
        tasks: [],
      };
      setProjectSelected(newProject);
      return {
        ...prevState,
        selectedProjectsId: projectId,
        projects: [newProject, ...prevState.projects],
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectsId: undefined,
      };
    });
  }

  function handleProjectSelected(project) {
    setProjectSelected(project);
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectsId: project.id
      }
    })
  }

  function handleDeleteProject(deleteProjectId) {
    const updatedProjects = projectsState.projects.filter(
      (project) => project.id !== deleteProjectId
    );
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectsId: undefined,
      projects: updatedProjects,
    }));
    setProjectSelected({});
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectsId
  );
  let content;

  if (projectsState.selectedProjectsId === null) {
    content = (
      <NewProject
        createProject={handleCreateProject}
        cancelCreateProject={handleCancelAddProject}
      />
    );
  } else if (projectsState.selectedProjectsId === undefined) {
    content = <NoProject addProject={handleStartAddProject} />;
  } else {
    content = (
      <SelectedProject
        projectsSelected={projectSelected}
        onDeleteProject={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasksList={projectSelected.tasks}
      />
    );
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        addProject={handleStartAddProject}
        projectsList={projectsState.projects}
        onProjectSelected={handleProjectSelected}
        selectedProject={projectSelected.id}
        title="Learning React"
      />
      {content}
    </main>
  );
}

export default App;
