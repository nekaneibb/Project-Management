import NoProject from "./components/NoProject";
import NewProject from "./components/NewProject";
import SideBar from "./components/SideBar";
import { useState } from "react";
import ProjectPage from "./components/ProjectPage";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectsId: undefined,
    projects: [],
  });

  function handleAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectsId: null,
      };
    });
  }

  function handleCreateProject(newProject) {
    setProjectsState((prevState) => {
      const updatedProjects = [...prevState.projects, newProject];
      return {
        ...prevState,
        selectedProjectsId: newProject.title,
        projects: updatedProjects,
      };
    });
  }
  
  let content;
  
  if (projectsState.selectedProjectsId === null) {
    content = <NewProject createProject={handleCreateProject}/>;
  } else if (projectsState.selectedProjectsId === undefined){
    content = <NoProject addProject={handleAddProject} />
  } else {content = <ProjectPage projectsList={projectsState.projects}/>
}
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar addProject={handleAddProject} projectsList={projectsState.projects} title="Learning React" />
      {content}
    </main>
  );
}

export default App;
