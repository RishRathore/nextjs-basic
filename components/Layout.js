import Head from "next/head";
import Link from "next/link";
import { GrFormAdd } from "react-icons/gr";
import { useRouter } from "next/router";
import { useTasks } from "../context/taskContext";

import styles from "../styles/styles.module.css";

export const Layout = ({ children, title }) => {
  const router = useRouter();
  const {tasks} = useTasks();

  return (
    <div className="bg-slate-900 w-screen h-screen">
      <Head>
        <title>Todo List {title ? `| ${title}` : ""}</title>
        <meta name="description" content="Lorem ipsum general text" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="w-screen flex justify-between items-center text-white p-4 shadow-xl">
        <div>
          <Link href="/">
            <a className="text-white">
              <h1 className="font-extrabold text-2xl">Todo List</h1>
            </a>
          </Link>
          <span>
            <p>{tasks.length} Tasks</p>
          </span>
        </div>
        <div>
          <button
            onClick={() => router.push("/users")}
            className="py-2 px-4 rounded-md shadow-md text-white font-bold inline-flex items-center"
          >
            Users
          </button>
          <button
            onClick={() => router.push("/new")}
            className="bg-lime-400 py-2 px-4 rounded-md shadow-md hover:bg-lime-500 text-black font-bold inline-flex items-center"
          >
            Add Task
            <GrFormAdd size={28} />
          </button>
        </div>
      </header>
      <hr className="text-gray-300 h-2"/>
      <main
        className={`${styles.bgPaper} px-28`}
      >
        {children}
      </main>
    </div>
  );
};
