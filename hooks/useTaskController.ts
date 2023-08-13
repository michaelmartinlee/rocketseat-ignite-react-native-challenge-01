import { useState } from "react";

interface ITaskArry { id: number; completed: boolean; task: string; }[]

export default function useTaskController() {
  const [taskArry, setTaskArry] = useState<ITaskArry[] | never[]>([])
  const [inputValue, setInputValue] = useState<string>("")

  const totalTaskCreate = taskArry.length
  const totalTaskDone = taskArry.filter(item => item.completed === true).length

  function handleSubmit() {
    const task = inputValue.trim();

    if (task.length === 0) { return }

    const addTask = {
      id: Math.random(),
      completed: false,
      task
    }
    setTaskArry([...taskArry, addTask])
    setInputValue('')
  }

  function changeStatus(id: number): void {
    const imutableArry = [...taskArry]
    const index = imutableArry.findIndex(item => item.id === id);

    if (index !== -1) {
      imutableArry[index].completed = !imutableArry[index].completed;
    }
    setTaskArry(imutableArry)
  }

  function removeTask(id: number): void {
    const imutableArry = [...taskArry]
    const arryFiltered = imutableArry.filter(item => item.id !== id);

    setTaskArry(arryFiltered)
  }

  return {
    taskArry, totalTaskCreate, totalTaskDone, handleSubmit, changeStatus, removeTask, inputValue, setInputValue
  }
}