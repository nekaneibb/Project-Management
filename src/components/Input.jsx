import { useState } from "react";

export default function Input({ textarea, labelText, ...props }) {
  const classes =  "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
  
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm text-stone-600 mb-1 uppercase font-bold">
        {labelText}
      </label>
      {textarea ? (
        <textarea {...props} className={classes} />
      ) : (
        <input
          {...props}
          className={classes}
        ></input>
      )}
    </p>
  );
}
