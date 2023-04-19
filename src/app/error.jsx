'use client';

import { useEffect } from "react";

const Error = ({error,reset}) => {

    useEffect(()=>{
        console.log(error)
    },[error])
  return (
    <div className='text-center mt-10'>
        <details>
        <summary className="cursor-pointer p-5 text-red-600 font-bold" >Something went wrong!</summary>
        <p className="text-red-300">{error.message}</p>
        </details>
       
        <button className='hover:text-amber-600 mt-5 py-3 px-2 bg-amber-600 rounded-lg hover:text-amber-800' onClick={()=> reset()}>Try Again</button>
    </div>
  )
}

export default Error;
