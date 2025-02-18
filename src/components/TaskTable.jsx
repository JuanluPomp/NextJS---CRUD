"use client"
import React from 'react'
import { useRouter } from "next/navigation"
import { deleteTaskById } from '@/services/tasks'
import { toast } from 'react-toastify'

export default function TaskTable({tasks}) {
  const router = useRouter()

  const handleClick = async (id) => {
    const data = await deleteTaskById(id)
    router.refresh()
    toast.success(data)
  }
  return (
    <>
        <table className="  mt-10 w-2/3 border-2 border-slate-900 shadow-lg">
              <thead className=" bg-sky-400 border-2">
                  <tr className=" border text-xl uppercase">
                      <th className=" border border-slate-500   p-2">ID</th>
                      <th className=" border border-slate-500  p-2">Titulo</th>
                      <th className=" border border-slate-500 p-2">DEscripcion</th>
                      <th className="border border-slate-500 p-2">Ultimo registro</th>
                      <th className="border border-slate-500 p-2">Ver Tarea</th>
                  </tr>
              </thead>
              <tbody className=" bg-white">
                  {tasks.map(task => (
                      <tr className=" text-center" key={task.id}>
                          <td className=" p-2 border border-slate-500 font-bold">{task.id}</td>
                          <td className=" p-2 border border-slate-500">{task.title}</td>
                          <td className=" p-2 border border-slate-500">{task.description}</td>
                          <td className=" p-2 border border-slate-500">{new Date(task.updatedAt).toLocaleString()}</td>
                          <td className=" p-2  border max-h-full flex justify-center gap-1">
                            <button 
                                onClick={() => {router.push('/tasks/edit/'+task.id)}}
                                className=" bg-slate-500 hover:bg-slate-600 text-white text-sm p-1 w-full  rounded-lg boder shadow"
                            >Editar</button>
                            <button 
                                onClick={()=> handleClick(task.id)}
                                className=" bg-red-500 hover:bg-red-600 text-white text-sm p-1 w-full  rounded-lg boder shadow"
                            >Eliminar</button>
                          </td>
                      </tr>    
                  ))}
              </tbody>
          </table>
    </>
  )
}
