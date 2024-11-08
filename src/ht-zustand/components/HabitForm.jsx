import React from 'react'
// import { Input } from '@/components/ui/input'
import { useHabitStore } from '@/store/HabitStore';
import { useState } from 'react';



const HabitForm = () => {
  // const id = useHabitStore((state) => state.id)
  const addHabit =  useHabitStore((state)=>state.addHabit)
   const [data, setData] = useState({
     title: "",
     type: "",
     status: "Not Completed", // Assuming a static id for simplicity
   });

   const handleChange = (e) => {
     setData({
       ...data,
       [e.target.name]: e.target.value,
     });
   };

   const handleSubmit = (e) => {
     e.preventDefault();
     if (data.title && data.type) addHabit(data)
     setData({title:"",type:""})
     console.log(data); // Replace with addHabit function
   };

   return (
     <form
       className='mt-6 ld:mt-12 h-fit flex flex-col gap-8 w-full items-center'
       onSubmit={handleSubmit}>
       <input
         type='text'
         name='title'
         placeholder='Enter your habit'
         className='w-full md:w-2/3 xl:w-1/2 text-black h-12'
         value={data.title}
         onChange={handleChange}
       />

       <div className='relative w-full md:w-2/3 xl:w-1/2 py-2'>
         <select
           name='type'
           className='w-full border shadow-xl border-gray-100 px-4 py-2 text-black'
           value={data.type}
           onChange={handleChange}>
           <option value='' disabled>
             Choose type
           </option>
           <option value='Weekly'>
             Weekly
           </option>
           <option value='Monthly'>
             Monthly
           </option>
         </select>
       </div>

       <button className='bg-red-500 hover:bg-red-700 w-1/3 lg:w-1/4 text-white font-bold py-2 px-4 rounded shadow-mg'>
         Add Habit
       </button>
     </form>
   );
 };

export default HabitForm
