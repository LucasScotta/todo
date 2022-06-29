import { useState } from "react";

function useLocalStorage (storageName, init) {
    console.log(storageName)
    const localStorageTodos = localStorage.getItem(storageName)
    let parsedTodos
    if (!localStorageTodos) {
      parsedTodos = []
      localStorage.setItem(storageName, JSON.stringify(init))
    }
    else {
      parsedTodos = JSON.parse(localStorageTodos)
    }
    const [todos, setTodos] = useState(parsedTodos)
    const saveTodos = (arr) => {
      localStorage.setItem(storageName, JSON.stringify(arr))
      setTodos(arr)
    }
    return [todos, saveTodos]
  }

  export default useLocalStorage