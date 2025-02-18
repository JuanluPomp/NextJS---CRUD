"use client"
import { useEffect, useState } from 'react'
import { createTask, editTaskById, getTaskById } from '@/services/tasks'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'

export default  function NewTask() {

  
  const defaultValues = {
      title: '',
      description: ''
  }
  const router = useRouter()
  const [values, setValues] = useState(defaultValues)

  const params = useParams()
  const id = params.id
    useEffect(() => {
      if(id){
        getTaskById(id).then(task => {
          setValues({
            title: task.title,
            description: task.description
          })
        })
       
      }
    }, [])
  const handleChange = (e) => {
    const {id, value} = e.target
    setValues(values => ({
      ...values,
      [id]: value
    }))
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!id){
      const data =  await createTask(values)
      toast.success('Cliente registrado de exitosamente')
    }else{
      const data = await editTaskById(values, id)
      toast.success('Datos del cliente actualizados')
    }
      router.refresh()
      router.push('/')
      setValues(defaultValues)
    
  }
  return (
    <>
      <div className=' container mx-auto w-1/3 mt-15 '>
        <h1 className=' text-3xl text-center font-bold mb-10'>Registro de tareas</h1>
          <form 
            className=' bg-white h-2/3 flex flex-col items-center space-y-10 p-10 rounded-xl shadow-xl'
            
            onSubmit={handleSubmit}>
            <h1 className=' text-center text-2xl font-bold'>LLene el siguiente formulario para registrar una nueva tarea</h1>
              <label htmlFor="title"
                className=' m-1 self-start font-bold text-md'
              >Titulo de la tarea</label>
              <input 
                  type="text"
                  id='title'
                  placeholder='Titulo'
                  value={values.title}
                  onChange={handleChange}
                  className=' bg-slate-100 border border-slate-500 w-full rounded-sm p-2 text-black'
              />
              <label htmlFor="description"
                className=' m-1 self-start font-bold text-md'
              >Descripcion o datos del cliente del cliente</label>
              <textarea
                 name="" id="description" rows="3"
                 className='  bg-slate-100 border border-slate-500 w-full rounded-sm p-2'
                 placeholder='Descripcion'   
                 value={values.description}
                 onChange={handleChange}
              ></textarea>
              <button 
                type='submit'
                className=' bg-sky-500 border hover:bg-sky-600 cursor-pointer border-slate-500 w-full p rounded-lg text-white font-bold text-xl p-2'
              >{id? 'Editar Tarea': 'Crear Tarea'}</button>
          </form>
          <button
            onClick={() => {router.push('/')}}
            className=' bg-slate-400 mt-5 p-2 rounded-lg hover:bg-slate-500 cursor-pointer font-bold text-sm'
          >Regresar  a Inicio</button>
      </div>
        
    </>
    
  )
}
