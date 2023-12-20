import { useState, useEffect } from "react";
import TasksList from "./TasksList.jsx";
import TaskForm from "./TaskForm.jsx";
import { tasks as data } from "./tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(titleTask) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: titleTask,
        description: "Nueva tarea",
      },
    ]);
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TasksList tasks={tasks} />
    </>
  );
}

export default App;
