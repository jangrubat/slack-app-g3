import * as React from 'react';
import { useState } from 'react';

export default function UserProfileUI({setLoginWindow,setOpenMainBank,setCurrentUser,    setCurrentUBal,setRegister,accounts}){

 


    return(
        <div className=" w-full flex flex-col  bg-[#6a6a6a]">
            <div className='w-full h-[10%] text-white bg-[#323232]'>Header</div>
         <div className='border-dotted border-r-2 h-screen left-0 w-[35%]'>Side bar Chat</div>
            


        </div>

    );

}