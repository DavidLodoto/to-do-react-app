import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="">
      <form
        className="bg-gray-800 p-5 mb-4 rounded-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-white mb-3">Crea tus tareas</h1>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-zinc-900 p-3 w-full mb-2 text-white rounded-md"
        />
        <textarea
          placeholder="Descripción de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-zinc-900 p-3 w-full mb-2 text-white rounded-md"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white rounded-md">Registrar</button>
      </form>
    </div>
  );
}

export default TaskForm;
