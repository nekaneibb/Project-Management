import Button from "./Button";

export default function SideBar({
  title,
  addProject,
  projectsList,
  onProjectSelected,
  selectedProject,
}) {

  return (
    <aside className=" bg-stone-900 text-stone-50 w-1/3 px-8 py-6 md:w-72 rounded-r-xl ">
      <h1 className="uppercase md:text-xl font-bold mt-8 text-stone-200 mb-8">
        Your projects
      </h1>
      <Button onClick={addProject}>+ Add Project</Button>
      <ul className="mt-8">
        {projectsList.map((project) => {
          let cssClass =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
          if (project.id === selectedProject) {
            cssClass += " bg-stone-800 text-stone-200";
          } else {
            cssClass += " text-stone-400";
          }
          return (
            <button
              className={cssClass}
              key={project.id}
              onClick={() => onProjectSelected(project)}
            >
              {project.title}
            </button>
          );
        })}
      </ul>
    </aside>
  );
}
