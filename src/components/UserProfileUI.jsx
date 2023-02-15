import * as React from 'react';
import { useState } from 'react';
import { BsFillPlusSquareFill } from "react-icons/bs";

export default function UserProfileUI({setLoginWindow,setOpenMainBank,setCurrentUser,    setCurrentUBal,setRegister,accounts}){

 


    return(
        <div className=" h-full w-full  flex flex-col overflow-hidden">
            <div className='flex flex-row-reverse w-full h-[10%] text-white bg-gradient-to-r from-[#1d1d1d] to-[#373045]  border-b-2 border-[#373045]'>
                

                <div className='m-1 p-2 w-[10%] text-right'>
                    <h1 className=' border-b-[.5px]'>Jan Grubat</h1>
                   <button className='hover:bg-slate-600 font-mono mt-0'>Log Out</button>
                </div>




                <div className=' rounded-xl m-2 border-[.5px] w-[80px] h-[80px] overflow-hidden'>
                   <img src="./images/jan-id.jpg" alt="" />
                </div>

                

            </div>

        {/* INBOX AREA */}

        <div className='flex border-3'>
         <div className='max-w-[450px]  border-r-2 border-[#373045] h-screen left-0 w-[35%] bg-[#6a6a6a] overflow-y-auto'>

                <div className='overflow-y-auto'>
                <div className='bg-gradient-to-r from-[#1d1d1d] to-[#373045] flex justify-between px-3 text-white  p-1'>Channels <button><BsFillPlusSquareFill/></button></div>

                <div id='inbox-1' className='overflow-hidden border-b-2 border-[#373045]   h-[95px] p-2 text-black hover:bg-[#b8b8b8]'>

                <div className='font-bold'>Jan Grubat</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</div>
                <div className='text-right'>Feb 01</div>
                </div>

                <div id='inbox-2' className='overflow-hidden border-b-2 border-[#373045]   h-[95px] p-2 text-black hover:bg-[#b8b8b8]'>

                <div className='font-bold'>Bernard Torlao</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</div>
                <div className='text-right'>Feb 03</div>
                </div>


                </div>

                




                
                <div className='overflow-y-auto'>
                <div className='bg-gradient-to-r from-[#1d1d1d] to-[#373045] flex justify-between px-3 text-white  p-1'>Direct Message<button><BsFillPlusSquareFill/></button>
                </div>

                <div id='inbox-1' className=' overflow-hidden border-b-2 border-[#373045]  h-[95px] p-2 text-black hover:bg-[#b8b8b8]'>
              
                <div className='font-bold'>Jan Grubat</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</div>
                <div className='text-right'>Feb 01</div>
                </div>

                <div id='inbox-2' className=' overflow-hidden border-b-2 border-[#373045]  h-[95px] p-2 text-black hover:bg-[#b8b8b8]'>

                <div className='font-bold'>Bernard Torlao</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</div>
                <div className='text-right'>Feb 03</div>
                </div>
                </div>



         </div>






            {/* CHAT AREA */}
         <div className='bg-[#1d1d1d] w-full ' >

                     <div className='h-[75%]  p-3 flex flex-col-reverse'>
                        
                    <div id='notMyMessage' className=' w-full  flex flex-row-reverse '>
                    <div className='rounded-[100%] m-3 bg-[#ffffff] w-[70px] h-[70px]'></div>
                    <div    className= 'self-center max-w-fit max-h-fit p-1 rounded-xl bg-[#d1d1d1]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, velit, sed voluptatum sunt et pariatur aut dolore ut ratione modi tenetur mollitia eveniet?</div>
                   
                    </div>

                    <div id='myMessage' className=' w-full  flex '>
                    <div className='rounded-[100%] m-3 bg-white w-[70px] h-[70px]'></div>
                    <div    className='self-center max-w-fit max-h-fit p-1 rounded-xl bg-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, velit, sed voluptatum sunt et pariatur aut dolore ut ratione modi tenetur mollitia eveniet?</div>
                    </div>
                    </div>   


                    {/* INPUT FIELD SECTION */}

                    <div className='bg-[#1d1d1d]] h-[15%] w-full border-[#373045] border-t-[.5px] '>
                    <form className='p-4 self-center '>
                        <textarea className='w-[100%] resize-none border-none h-[80px] first-letter:' placeholder='Type your message here ...' type="
                        " />
                        <button className='m-2 w-[5%] h-[50%] text-[17px] bg-black rounded-2xl text-white '>SEND</button>
                    </form>
                    </div>


         </div>
                   
        
         </div>
        
        </div>

    );

}