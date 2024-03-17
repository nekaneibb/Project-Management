import { useRef, useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function Task({ onAdd, onDelete, taskList }) {
  const [enteredTask, setEnteredTask] = useState()
  const task = useRef();

  function handleClick() {
    if(task.current.value.trim() === '')return;
    setEnteredTask(task.current.value)
    onAdd(task.current.value)
    task.current.value = "";
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks:</h2>
      {taskList.length === 0 ? (
        <p className="text-stone-800 mb-4">
          This project doesn't have any task yet
        </p>
      ) : (
        <ul className="mt-8 p-4 rounded-md bg-stone-100">
          {taskList.map((task) => (
            <li className="flex justify-between my-4" key={task.id}>
              {task.text}
              <button
                className="border px-1 rounded-md hover:bg-stone-200 text-stone-700"
                onClick={() => onDelete(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="flex items-center gap-4">
        <Input
          ref={task}
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        ></Input>
        <button
          onClick={handleClick}
          className="text-stone-800 mt-2 font-semibold hover:text-stone-500"
        >
          Add Task
        </button>
      </div>
    </section>
  );
}
