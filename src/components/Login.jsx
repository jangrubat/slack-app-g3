import * as React from 'react';
import { useState } from 'react';

export default function Login({setLoginWindow,setOpenMainBank,setCurrentUser,    setCurrentUBal,setRegister,accounts}){

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const closeLogin= ()=>{
        setLoginWindow(false)
        setOpenMainBank(true)
    }

    const registerUser =()=>{
        setRegister(true)
        setLoginWindow(false)
    }




    

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        const match = accounts.find((data) => data.userName === username && data.password === password)

        console.log(accounts)

       


        if(match){
           
            console.log(match.fullName)
            setCurrentUser(match.fullName)
            setCurrentUBal(match.accountBal)
            closeLogin()
            
            
        }else{
            alert("No User FOUND, PLEASE REGISTER")
        }

    }


    return(
        <div className=" w-[50%] flex items-center justify-center bg-[#454545]">
       
        <form onSubmit={handleSubmit} className='  px-10 py-20 rounded-3xl '>
            
           <h1 className='text-5xl text-[#ffffff] font-semibold drop-shadow-lg text-center'>Slack App G3</h1>
           <p className=' text-[#ffffff] font-medium text-lg text-center  mt-4'>Welcome back! Please enter your details.</p>

           <div className='mt-8'>
                        <div>
                            <label className='text-[#ffffff] text-lg font-medium ' htmlFor="">Username</label>
                            <input 
                            value={username} 
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
                            <button type='submit' className='text-white w-64 h-14 bg-gradient-to-r from-[#6e6e6e] to-[#373045] rounded-xl text-[20px] font-semibold active:scale-[.97]   '>Sign in</button>
                        </div>
                    <div className='flex text-white justify-center mt-5 hover:underline'>
                        <button onClick={registerUser}>Don't have an Account? Register Here.</button>
                    </div>

        </form>

            <div className=' bg-white w-[50%]] h-screen flex'></div>


        </div>

    );

}