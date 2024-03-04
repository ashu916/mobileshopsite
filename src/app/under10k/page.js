

import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

async function getData(){
  try {
  const res =  await fetch('http://localhost:3000/api/under10k',{cache:'no-store'})
  
  return res.json()
  }
  catch(err){
    console.log(err)
  }
}


 async function under10k () {
   const data = await getData()
 return(
   <div className = " container">
 {data.map((item)=>{
  
  
  
  
   return(
   <div className='border-y border-gray-400 '>
   <Link className="flex" href={{pathname:'./productdetails',  query:{data:JSON.stringify(item
     
   )}}}>
<img src={item.imgUrl}
width={100}
height={100}
alt='image'/>
<div className='p-3'>
<h1 className='m-2 text-2xl'>{item.MobileName}</h1>
<div className="flex">

<div className="w-3/4">
{item.VariantAndPrices.map((variant)=>{return(<p className="text-red-400 text-sm">{variant}</p>)})}
</div>
<div className=" items-center flex">
<h1 className=" linkAnimation  text-center text-sm" > MORE DETAILS </h1>
</div>
</div>
</div>
</Link>
</div>
)
 })}

  </div>)
}

export default under10k