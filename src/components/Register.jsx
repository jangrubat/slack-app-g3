import * as React from 'react';
import { useState } from 'react';



export default function Register(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')

    const url = 'http://206.189.91.54/api/v1/auth'

    const handleSubmit = async (e)=>{
        e.preventDefault();
     

        const data = {
            email: email,
            password: password,
            password_confirmation: confirmPass
          }
      
          
            const response = await fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            })

            const result = await response.json()

            if (result.errors) {
                console.log(JSON.stringify(result.errors.full_messages))
                alert(result.errors.full_messages)
                
                setEmail('')
                setPassword('')
                setConfirmPass('')

            } else if (result.status === 'success') {
                alert('Account was successfully created!')
                setEmail('')
                setPassword('')
                setConfirmPass('')
            }
    }


    return(
        <div className=" w-full flex items-center justify-center bg-[#454545]">
       
        <form onSubmit={handleSubmit} className='  px-40 py-20 rounded-3xl'>
            
           <h1 className='text-5xl text-[#ffffff] font-semibold drop-shadow-lg text-center'>Registration</h1>
           <p className=' text-[#ffffff] font-medium text-lg text-center  mt-4'>Please enter your details.</p>

           <div className='mt-8'>
                        <div>
                            <label className='text-[#ffffff] text-lg font-medium ' htmlFor="">Email</label>
                            <input 
                            value={email} 
                            onChange={(e)=>setEmail(e.target.value)}

                            className=' w-full border-2 border-gray-100 rounded-xl p-2 mt-1' placeholder='Enter your email' />                            
                        </div>
                        <div>
                            <label className='text-[#ffffff] text-lg font-medium ' htmlFor="">Password</label>
                            <input 
                            value={password} 
                            onChange={(e)=>setPassword(e.target.value)}

                            className=' w-full border-2 border-gray-100 rounded-xl p-2 mt-1' placeholder='Enter your password' type='password' />                            
                        </div>
                        <div className='mt-2'>
                            <label className='text-[#ffffff] text-lg font-medium' htmlFor="">Confirm Password</label>
                            <input value={confirmPass} 
                            onChange={(e)=>setConfirmPass(e.target.value)} 
                            
                            className='w-full border-2 border-gray-100 rounded-xl p-2 mt-1' placeholder='Confirm your password' type='password' />                            
                        </div>

                       


           </div>
                        <div className='mt-8 flex items-center justify-center'>
                            <button type='submit' className='text-white w-64 h-14 bg-gradient-to-r from-[#6e6e6e] to-[#373045] rounded-xl font-semibold active:scale-[.97]   '>Register</button>
                        </div>
                   
        </form>
        </div>

    );

}