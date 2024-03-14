import Button from "./Button";
import Input from "./Input";
import { useState } from "react";


export default function NewProject({createProject}) {
  const [project, setProject] = useState({
    title: '',
    description: '',
    date: ''
  })

  function handleInputChange(identifier, value){
    setProject((prevValues)=> {
      return {
        ...prevValues,
        [identifier]: value.target.value
      }
    })
  }

  return (
    <div className="w-[35rem] mt-16 flex flex-col">
      <menu className="flex items-center justify-end gap-4 my-4">
        <button className=" text-stone-800 hover:text-stone-500 font-medium py-2 px-4 ">
          Cancel
        </button>
         <Button onClick={() => createProject(project)} >Save</Button> 
      </menu>
      <div className="flex flex-col gap-4">
        <Input onChange={(value) => handleInputChange("title", value)} labelText="Title" />
        <Input onChange={(value) => handleInputChange("description", value)} labelText="Description" textarea />
        <Input onChange={(value) => handleInputChange("date", value)} labelText="Due Date" type="date" />
      </div>
    </div>
  );
}
