import { Layout } from "../components/Layout";
import { useTasks } from "../context/taskContext";
import { useRouter } from "next/router";

export default function Home() {
  const {push} = useRouter();
  const { tasks, deleteTask } = useTasks();

  const handleDelete = (id) => {
    deleteTask(id);
  }

  return (
    <Layout title="home">
      {tasks.length === 0 ? (
        <h1 className="text-center text-lime-400 text-5xl font-bold">
          No task found
        </h1>
      ) : (
        <div>
          <h1 className="text-center text-lime-400 text-5xl font-bold my-8">
            Your Tasks
          </h1>
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-zinc-900 w-3/4 mx-auto my-2 py-4 px-8 rounded-lg hover:bg-zinc-800 flex justify-between items-center"
            >
              <div>
                <h1 className="text-lime-400 text-2xl font-bold">
                  {task.title}
                </h1>
                <p className="text-gray-400 text-lg font-bold">
                  {task.description}
                </p>
              </div>
              <div>
                <button
                  className="px-6 py-2 rounded-lg text-black font-bold bg-sky-400 hover:bg-sky-600"
                  onClick={() => { handleDelete(task.id); }}
                >
                  Delete
                </button>
                <button
                  className="ml-1 px-8 py-2 rounded-lg text-black font-bold bg-sky-400 hover:bg-sky-600"
                  onClick={() => { push(`/edit/${task.id}`) }}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
}
