import { POST } from "@/app/api/task/route"



export async function createTask({title, description}){
    try {
        const res = await fetch('/api/task', {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.log({error: error.message})
    }
}

export async function getTasks(){
    try {
        const res = await fetch('http://localhost:3000/api/task')
        const tasks = await res.json()
        return tasks
    } catch (error) {
        throw new Error(error.message)
    }
}

export async function getTaskById(id){
    try {
        const res = await fetch(`/api/task/${id}`)
        const task = await res.json()
        return task
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function editTaskById({title, description}, id){
    try {
        const res = await fetch(`/api/task/${id}`, {
            method: 'PUT',
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        return data
    } catch (error) {
        throw new Error(error.message)
    }
}

export async function deleteTaskById(id){
    try {
        const res = await fetch(`/api/task/${id}`,{
            method: 'DELETE'
        }
        )
        const data = res.json()
        return data
    } catch (error) {
        throw new Error(error.message)
    }
}