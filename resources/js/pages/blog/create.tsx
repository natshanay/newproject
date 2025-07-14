import React from 'react'

const create = () => {
  return (
    <div className='bg-red-900 flex flex-col items-center justify-center h-screen text-white border-2 border-red-500 text-5xl bg-red-100'>
      the create page for blog

      <form action="" className='flex flex-col gap-4 bg-pink-100 p-4 flex items-center'>
        <label htmlFor="">user name </label>
        <input  className='bg-pink-400' type="text" />
        <label htmlFor="">user name </label>
        <input  className='bg-pink-400' type="text" />
        <label htmlFor="">user name </label>
        <input  className='bg-pink-400' type="text" />
        
        <button className='bg-pink-500 p-2 rounded-md text-white'>Submit</button>
      </form>
    </div>
  )
}

export default create
