import HabitForm from '../components/HabitForm'
import React from 'react'
import HabitList from '../components/HabitList'

const HtRedux = () => {
  return (
   <div className='flex flex-col items-center justify-center p-4 md:p-8 xl:p-12'>
      <h1 className='text-3xl text-red-600 font-bold underline md:text-5xl xl:text-7xl'>
        Habit Management - Redux ver. 
      </h1>
      <HabitForm />
      <HabitList/>
      
          

      </div>
  )
}

export default HtRedux
