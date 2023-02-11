import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserProfileUI({setLoginWindow,setOpenMainBank,setCurrentUser,    setCurrentUBal,setRegister,accounts}){

    const navigate = useNavigate()

    const handleLogout = () => {

        localStorage.clear('user-info')
        navigate('/login')

    }

    return(
        <div className=" w-full flex flex-col  bg-[#6a6a6a]">
            <div className='w-full h-[10%] text-white bg-[#323232]'>Header</div>
         <div className='border-dotted border-r-2 h-screen left-0 w-[35%]'>Side bar Chat</div>

         <button onClick={handleLogout}>Logout</button>
            


        </div>

    );

}