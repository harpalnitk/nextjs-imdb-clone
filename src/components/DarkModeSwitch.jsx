'use client';

import {MdLightMode} from 'react-icons/md';
import { BsFillMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import {useState,useEffect} from 'react';

const DarkModeSwitch = () => {

    const {systemTheme, theme, setTheme} = useTheme();// dark, light, system
    const [mounted, setMounted] =  useState(false);

    // sometimes on server we will have different theme and on client
    //different so react will give hydration error
    //to prevent that we need to ensure that page is mounted
    //i.e rendered completely
      // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])
    
    const currentTheme = theme === 'system' ? systemTheme : theme ;
  return (
    <>
    {mounted && (currentTheme === 'dark' ? 
    (<MdLightMode className='text-xl cursor-pointer hover:text-amber-500' onClick={()=> setTheme('light')}/>)
    :( <BsFillMoonFill className='text-xl cursor-pointer hover:text-amber-500' onClick={()=> setTheme('dark')}/>)
    )}
    
   
    </>
  )
}

export default DarkModeSwitch;
