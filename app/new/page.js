"use client"
import { useState, useEffect, use } from "react"
import { useTasks } from "../../context/TasksContext"
import {useRouter} from "next/navigation"
import {useForm} from "react-hook-form"
import {toast } from "react-hot-toast"


export default function Page({params}) {
  console.log(params)
 
  const { tasks, createTask, updateTask } = useTasks()
  const router = useRouter()

  const {register, handleSubmit,setValue, formState:{
    errors
  }} = useForm()

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      console.log("editando")
      updateTask(params.id, data.title, data.description)
      toast.success("Tarea actualizada")

    }else{
      createTask(data.title, data.description)
      toast.success("Tarea creada")

    }
    console.log(data)
    router.push("/")
  })

  useEffect(() => {
    if (params.id) {
      const taskfound = tasks.find(task => task.id === params.id)
      if (taskfound) {
        setValue("title", taskfound.title)
        setValue("description", taskfound.description)
      }

    }
    
  }, [])
  return (
    <div className="flex justify-center items-center rounded-sm px-20 py-5 m-2">

      <form onSubmit={onSubmit} className="bg-gray-700 py-10 justify-center items-center px-5 py-5">
        <h2 className="justify-center items-center">Nueva Tarea</h2>
      <input type="text" placeholder="Title" {...register("title", {required:true})}
      className="bg-gray-800 py-3 px-4 mb-2 block
      focus:outline-none w-full rounded-sm"/>
      {errors.title && <span className="block text-red-400 mb-2">Este campo es requerido</span>}
      <textarea placeholder="Description" {...register("description", {required:true})}
      className="bg-gray-800 py-3 px-4 mb-2
      focus:outline-none w-full"/>
      {errors.description && <span  className="block text-red-400 mb-2">Este campo es requerido</span>}

      <button className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30">Save</button>
    </form>


    </div>
  )
}
