import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Go to the market", completed: false },
    { id: 2, text: "Finish writing the code", completed: true },
    { id: 3, text: "Go for a run", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  return (
    <div className="w-1/3 m-16 mx-auto border-4 rounded-3xl">
      <div className="text-4xl font-bold my-10 text-center">To Do List</div>

      <div className="flex justify-center items-center gap-4">
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const newTaskObj = {
                id: tasks.length + 1,
                text: newTask,
                completed: false,
              };
              setTasks([newTaskObj, ...tasks]);
              setNewTask("");
            }
          }}
          type="text"
          className="border-2 rounded-lg p-4 w-2/3"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={() => {
            const newTaskObj = {
              id: tasks.length + 1,
              text: newTask,
              completed: false,
            };
            setTasks([newTaskObj, ...tasks]);
            setNewTask("");
          }}
          className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 hover:cursor-pointer"
        >
          Add Task
        </button>
      </div>

      <ul className="flex flex-col gap-4 my-4 justify-center items-center p-10">
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => {
              setTasks(
                tasks.map((t) =>
                  t.id === task.id ? { ...t, completed: !t.completed } : t
                )
              );
            }}
            className={`bg-gray-300 text-[18px] w-full rounded-2xl hover:cursor-pointer hover:bg-gray-200 ${
              task.completed ? "bg-green-500 hover:bg-green-500" : ""
            }`}
          >
            <div className="flex justify-end">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setTasks(tasks.filter((t) => t.id !== task.id));
                }}
                className="bg-red-500 text-white py-0.5 px-2"
              >
                X
              </button>
            </div>
            <div className="mx-8 mb-8">{task.text}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
