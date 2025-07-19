import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  return (
    <div className="min-h-screen bg-midnight text-white font-body p-6 flex flex-col items-center">
      <h1 className="text-5xl font-heading font-bold mb-3 text-center">
        Set <span className="text-vibrantPink">Reminders</span> for Tasks
      </h1>

      <div className="flex flex-col sm:flex-row items-center w-full max-w-xl my-6 gap-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Type a new task..."
          className="w-full sm:flex-1 px-4 py-3 bg-softPink text-darkPink placeholder-darkPink border border-vibrantPink focus:ring-2 ring-vibrantPink outline-none"
        />
        <button
          onClick={addTask}
          className="px-6 py-3 bg-vibrantPink text-white hover:bg-pink-600 transition duration-300 font-semibold border border-pink-500"
        >
          Create
        </button>
      </div>

      <div className="w-full max-w-xl mt-6">
        <h2 className="text-2xl font-heading text-softPink mb-4">Pending Todos</h2>
        <ul className="space-y-4">
          <AnimatePresence>
            {tasks.map((task, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-softPink text-darkPink flex justify-between items-center p-4 shadow-md border border-pink-300"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(index)}
                    className="w-5 h-5 accent-vibrantPink cursor-pointer"
                  />
                  <span className={`text-lg ${task.completed ? "line-through text-pink-500" : ""}`}>
                    {task.text}
                  </span>
                </div>
                <button
                  onClick={() => deleteTask(index)}
                  className="text-sm text-vibrantPink hover:text-red-500 font-semibold transition"
                >
                  Delete
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
}
