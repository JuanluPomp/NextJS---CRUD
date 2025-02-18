import TaskTable from "@/components/TaskTable"
import { getTasks } from "@/services/tasks"
import Link from "next/link"

export default async function Home() {
  const tasks = await getTasks()
  return (
    <>
      <section className=" container h-screen mx-auto mt-10  flex flex-col items-center">
        <h1 className=" font-bold text-3xl text-center mt-5">Clientes registrados</h1>
        <p className=" text-black mt-5">¿Todavia no has registrado tareas? <Link href={'/new-task'} className=" text-sky-600">registrar tarea</Link></p>
        <TaskTable
          tasks={tasks}
        />
      </section>
         
    </>
  )
}