import Button from "./Button";
import Modal from "./Modal";
import Input from "./Input";

import { useRef, useState } from "react";

export default function NewProject({ createProject, cancelCreateProject }) {
  const dialog = useRef();
  const title = useRef();
  const description = useRef();
  const date = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;

    const project = {
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    };
    //validation here
    if (
      enteredTitle === "" ||
      enteredDescription === "" ||
      enteredDate === ""
    ) {
      dialog.current.open();
      return;
    }
    createProject(project);
  }

  return (
    <div className="w-[35rem] mt-16 flex flex-col">
      <Modal ref={dialog} buttonCaption="Close" onClick={cancelCreateProject}>
        <h2 className="text-xl font-bold text-stone-700 my-4">
          Please fill the inputs correctly
        </h2>
        <p className="text-stone-600 mb-8 mt-6 text-center">
          The title must be completed
        </p>
      </Modal>
      <menu className="flex items-center justify-end gap-4 my-4">
        <h1 className="mr-auto text-2xl font-bold text-stone-600">
          New Project
        </h1>
        <button
          className=" text-stone-800 hover:text-stone-500 font-medium py-2 px-4 "
          onClick={cancelCreateProject}
        >
          Cancel
        </button>
        <Button onClick={handleSave}>Save</Button>
      </menu>
      <div className="flex flex-col gap-4">
        <Input ref={title} type="text" />
        <Input ref={description} textarea />
        <Input ref={date} labelText="Due Date" type="date" />
      </div>
    </div>
  );
}
