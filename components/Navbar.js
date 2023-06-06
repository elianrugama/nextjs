"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {useTasks} from "../context/TasksContext"

export default function Navbar() {
    const router = useRouter()
    const {tasks} = useTasks()


  return (
    <div>
    <header className="flex items-center justify-between bg-gray-800 px-28 py-3">
        <Link href="/">
    <h1 className="font-bold text-3xl text-white">Task App
    <span className=" text-sm text-slate-300 ml-2">{tasks.length} tasks</span></h1>

    </Link>
        
        <button onClick={()=>{
            router.push("/new")
        }}
        className="bg-green-500 hover:bg-green-400 px-5 py-2 text-gray-50 font-bold rounded-sm inline-flex items-center"
        >New</button>

    </header>
    </div>
  )
}

