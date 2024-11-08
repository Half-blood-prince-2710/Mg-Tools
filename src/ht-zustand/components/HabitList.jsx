import { useHabitStore } from '@/store/HabitStore'
import React from 'react'

const HabitList = () => {
  const habits = useHabitStore((state) => state.habits)
  const removeHabit = useHabitStore((state) => state.removeHabit)
  const changeStatus = useHabitStore((state) => state.changeStatus)
  console.log(habits);
  return (
    <div className='flex flex-col justify-center items-center mt-8 lg:mt-12 shadow-xl  w-full px-4 md:px-8 xl:p-12'>
      {habits.map(
        ({ title, id, status, type }) => {
          return (
            <div
              key={id}
              className='flex justify-between items-center w-full h-32 shadow-sm shadow-red-500 bg-gray-900 px-2 py-2 md:px-4 xl:px-8'>
              <div className='flex flex-col justify-between   h-full items-start w-2/3'>
                <h1 className='text-3xl text-red-500 font-bold'>
                  {title}
                </h1>
                <p className='text-gray-400  font-mono'>
                  {type}
                </p>
              </div>
              <div className='flex flex-col lg:flex-row gap-2  w-1/3 justify-end lg:items-end'>
                <button className='border p-1 w-full h-10 lg:w-1/2 shadow-black shadow-md'
                onClick={()=>changeStatus(id)}
                >
                  {status}
                </button>
                <button className='border p-1 w-full h-10 lg:w-1/2 shadow-black shadow-md'
                  onClick={()=>removeHabit(id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        }
      )
      }
    </div>
  )
}

export default HabitList
