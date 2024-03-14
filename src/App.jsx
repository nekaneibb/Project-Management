import NoProject from "./components/NoProject";
import NewProject from "./components/NewProject";
import SideBar from "./components/SideBar";
import { useState } from "react";

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
  } else {content = <p>YOUR PROJECTS:</p> 
  console.log("PROJECTS", projectsState.projects);
}
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar addProject={handleAddProject} title="Learning React" />
      {content}
    </main>
  );
}

export default App;
