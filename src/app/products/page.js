"use client"; // This is a client 

import React from 'react';
import Link from 'next/link'
import {Button} from '../components/Components'


import { useState } from "react";
function products(){
  
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return(
  <div className="flex flex-col  items-center min-h-screen">
  <h1 className="text-2xl text-center text-green-600 p-10 "> SELECT YOUR BUDGET</h1>
  <h1 className="relative text-xl right-28 mt-1 top-6" >Click here 👉</h1>
  
      <Button width={"w-24"} title= {"SELECT"} onClick={handleOpen}></Button>
      
       <div><ul className="flex  flex-col space-y-5 m-5">
      <li className="  linkAnimation text-center "><Link href="/under10k"><h1  className="text-3xl">UNDER 10k</h1></Link></li>
<li className=" linkAnimation "><Link href="/10kto15k"><h1  className="text-3xl">10k To 15K</h1></Link></li>
<li className=' linkAnimation text-center ' ><Link  href="/15kto20k"><h1 className="text-3xl">15k To 20k</h1></Link></li>
<li className=" linkAnimation "><Link href="/above20k"><h1 className="text-3xl">Above 20k</h1></Link></li>

      
      </ul></div> <div>           <h2 className=" my-5  mx-5 text-xl pb-2 text-blue-600 text-center  ">Get an amazing suggestion which phone suitable for your needs and budget click to "Select" to "choose your Budget"  🤳 <br/> see the features and get exciting offers best in deal 🤝  <br/> 😉 </h2> </div>
    
  
  </div>)
}

export default products