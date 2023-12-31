import TasksList from "./components/TasksList.jsx";
import TaskForm from "./components/TaskForm.jsx";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto max-w-screen-lg p-10">
        <TaskForm />
        <TasksList />
      </div>
    </main>
  );
}

export default App;
