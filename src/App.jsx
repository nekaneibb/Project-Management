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
      const projectId = Math.random()
      const newProject = {
       ...projectData,
       id: projectId
      }
      return {
        ...prevState,
        selectedProjectsId: projectId,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCancelAddProject(){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectsId: undefined,
      };
    });
  }

  let content;
  
  if (projectsState.selectedProjectsId === null) {
    content = <NewProject createProject={handleCreateProject} cancelCreateProject={handleCancelAddProject}/>;
  } else if (projectsState.selectedProjectsId === undefined){
    content = <NoProject addProject={handleStartAddProject} />
  } else {content = <SelectedProject projectsList={projectsState.projects}/>
}
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar addProject={handleStartAddProject} projectsList={projectsState.projects} title="Learning React" />
      {content}
    </main>
  );
}

export default App;
