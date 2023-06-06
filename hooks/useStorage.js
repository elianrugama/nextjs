import { useState, useEffect } from "react"

export function useStorage(key, initialValue) {

    const [tasks, setTask] = useState(initialValue)

    useEffect(() =>{
        const item = localStorage.getItem(key)
        const tasks = JSON.parse(item)
        if (tasks) {
            setTask(tasks)
        }
    }, [])

    useEffect(() => {
        if (tasks.length) {
            localStorage.setItem(key, JSON.stringify(tasks))
        }
    }, [tasks])

    return [tasks, setTask]
    
}
