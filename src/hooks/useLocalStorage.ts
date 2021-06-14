import { useState } from "react"

export const useLocalStorage = <T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] => {
  const [storedValue, setStoredValue] = useState<T>(()=> {
    try{
      const item = window.localStorage.getItem('react-calendar-app-' + key)
      return item ? JSON.parse(item): initialValue
    }catch (error){
      console.log(error)
      return initialValue
    }
  })

  const setValue= (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore)
      window.localStorage.setItem('react-calendar-app-' + key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error);
      
    }
  }

  return [storedValue, setValue]
}

