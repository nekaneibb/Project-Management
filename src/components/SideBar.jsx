import Button from "./Button";

export default function SideBar({ title, addProject }) {
  return (
    <aside className=" bg-stone-900 text-stone-50 w-1/3 px-8 py-6 md:w-72 rounded-r-xl ">
      <h1 className="uppercase md:text-xl font-bold mt-8 text-stone-200 mb-8">
        Your projects
      </h1>
      <Button onClick={addProject}>+ Add Project</Button>
      <ul className="mt-8">
        <li>{title}</li>
      </ul>
    </aside>
  );
}
