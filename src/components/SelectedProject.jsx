import { useState } from "react";
import Task from "./Task";
import NoProject from "./NoProject";

export default function SelectedProject({ projectsSelected, onDeleteProject, onAddTask, onDeleteTask, tasksList }) {
  const formattedDate = new Date(projectsSelected.date).toLocaleDateString(
    "es-UE",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {projectsSelected.title}
          </h1>
          <button onClick={() => onDeleteProject(projectsSelected.id)} className="text-stone-600 hover:text-stone-300 bg-stone-400 px-2 py-1 rounded-md">
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {projectsSelected.description}
        </p>
      </header>
      <Task onAdd={onAddTask} onDelete={onDeleteTask} taskList={tasksList} ></Task>
    </div>
  );
}
