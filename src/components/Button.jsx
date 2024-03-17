export default function Button({ addProject, handleCreateTask, children, ...props }) {
  return (
    <p>
      <button
        {...props}
        className="px-6 py-2 rounded-md bg-stone-800 text-stone-400 hover:bg-stone-950 hover:text-stone-300"
      >
        {children}
      </button>
    </p>
  );
}
