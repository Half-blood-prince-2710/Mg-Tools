import React from 'react'
// import { Input } from '@/components/ui/input'
import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';



const HtZustand = () => {

  return (
    <div className='flex flex-col items-center justify-center p-4 md:p-8 xl:p-12'>
      <h1 className='text-3xl text-red-600 font-bold underline md:text-5xl xl:text-7xl'>
        Habit Management - Zustand ver.
      </h1>
      <HabitForm />
      <HabitList/>
      
          

      </div>

  );
}

export default HtZustand
