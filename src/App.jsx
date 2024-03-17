import NoProject from "./components/NoProject";
import NewProject from "./components/NewProject";
import SideBar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";
import { useRef, useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectsId: undefined,
    projects: [],
    task: [],
  });
  const [projectSelected, setProjectSelected] = useState({});

  function handleAddTask(taskData) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: taskData,
        projectId: prevState.selectedProjectsId,
        id: taskId,
      };
      return {
        ...prevState,
        task: [...prevState.task, newTask],
      };
    });
  }

  function handleDeleteTask(taskId) {
    const updatedTasks = projectsState.task.filter(
      (task) => task.id !== taskId
    );
    setProjectsState((prevState) => ({
      ...prevState,
      task: updatedTasks,
    }));
    setProjectSelected({});
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
  }

  function handleDeleteProject(deleteProjectId) {
    const updatedProjects = projectsState.projects.filter(
      (project) => project.id !== deleteProjectId
    );
    setProjectsState((prevState) => ({
      ...prevState,
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
        tasksList={projectsState.task}
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
