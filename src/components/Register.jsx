import * as React from 'react';
import { useState } from 'react';



export default function Register(){

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const closeRegister= ()=>{
        // setLoginWindow(true)
        // setRegister(false)
    }





    const handleSubmit = (e)=>{
        e.preventDefault();
     

        const accountBal=10000

        if(!fullName){
            alert("Please add your information")
        }

        // addUser({fullName, email, userName,password,accountBal})
        closeRegister()
     

    }


    return(
        <div className=" w-full flex items-center justify-center bg-[#454545]">
       
        <form onSubmit={handleSubmit} className='  px-40 py-20 rounded-3xl'>
            
           <h1 className='text-5xl text-[#ffffff] font-semibold drop-shadow-lg text-center'>Registration</h1>
           <p className=' text-[#ffffff] font-medium text-lg text-center  mt-4'>Please enter your details.</p>

           <div className='mt-8'>
                         <div>
                            <label className='text-[#ffffff] text-lg font-medium ' htmlFor="">Full Name</label>
                            <input 
                            value={fullName} 
                            onChange={(e)=>setFullName(e.target.value)}

                            className=' w-full border-2 border-gray-100 rounded-xl p-2 mt-1' placeholder='Enter your Full Name' />                            
                        </div>
                        <div>
                            <label className='text-[#ffffff] text-lg font-medium ' htmlFor="">Email</label>
                            <input 
                            value={email} 
                            onChange={(e)=>setEmail(e.target.value)}

                            className=' w-full border-2 border-gray-100 rounded-xl p-2 mt-1' placeholder='Enter your email' />                            
                        </div>
                        
                        
                        <div>
                            <label className='text-[#ffffff] text-lg font-medium ' htmlFor="">Username</label>
                            <input 
                            value={userName} 
                            onChange={(e)=>setUserName(e.target.value)}

                            className=' w-full border-2 border-gray-100 rounded-xl p-2 mt-1' placeholder='Enter your username' />                            
                        </div>




                        
                        <div className='mt-2'>
                            <label className='text-[#ffffff] text-lg font-medium' htmlFor="">Password</label>
                            <input value={password} 
                            onChange={(e)=>setPassword(e.target.value)} 
                            
                            className='w-full border-2 border-gray-100 rounded-xl p-2 mt-1' placeholder='Enter your password' type='password' />                            
                        </div>

                       


           </div>
                        <div className='mt-8 flex items-center justify-center'>
                            <button type='submit' className='text-white w-64 h-14 bg-gradient-to-r from-[#6e6e6e] to-[#373045] rounded-xl font-semibold active:scale-[.97]   '>Register</button>
                        </div>
                   
        </form>
        </div>

    );

}