"use client"
import { useTasks } from "../context/TasksContext"
import { TaskCard } from "../components/TaskCard"
import { Key } from "react"

export default function Page() {
  const { tasks } = useTasks()

  console.log(tasks)
  return (
    <div className="flex justify-center grid ">
      <div className="w-12/12">
        {tasks.map((task: { id: Key | null | undefined }) => (
          <TaskCard task = {task} key={task.id}/>
        ))}
      
    </div>
    </div>
  )
}
