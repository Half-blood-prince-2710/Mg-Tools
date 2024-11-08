import React from 'react'
import { Outlet } from 'react-router-dom'

const Applayout = () => {
  return (
    <div className='min-h-screen overflow-x-hidden bg-gray-950  text-white w-full '>
      <div className='bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900' />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Applayout
