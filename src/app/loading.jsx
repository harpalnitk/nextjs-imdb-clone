import React from 'react'


// nextjs 13 automatically displays this when there is a delay 
const Loading = () => {
  return (
    <div className='flex justify-center'>
        <img  className='h-96' src="spinner.svg" alt="Loading..." />
    </div>
  )
}

export default Loading;
