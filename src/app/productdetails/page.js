"use client"; // This is a client 

import React from 'react';
import Link from 'next/link'
import {Button} from '../components/Components'
import {useSearchParams} from 'next/navigation'
function productdetails(){
 const searchParams = useSearchParams() 
 const data = JSON.parse(searchParams.get("data"))
 const mbn = '918817332335'
 const text= `hello, i am looking for best offer for ${data.MobileName}`
const whatsappUrl = `https://wa.me/${mbn}?text=${text}`
  return(
    
    <div className="flex flex-col items-center bg-black">
          <header  className="  fixed   w-full bg-blue-500 text-white p-4">
        <h1 className="   text-center text-2xl font-bold">OM MOBILE SHOP</h1>
        </header>
       
        <div className="w-full bg-black  z-10 fixed top-14 h-32 mt-1  flex">
    <div className="w-3/4">
    <h1 className="  ml-2  text-2xl text-white font-bold">{data.MobileName}</h1>
    {data.VariantAndPrices.map((item)=>{
      return(
        <p className="   text-xl  text-red-500 ">{item}</p>)
    })}
    </div>
    <div className=" flex flex-col items-center" >
    <p className=" text-center text-sm   mt-1 ml-2 text-blue-500">To get best prices and offers click button</p>
    <Link className=' mt-1 linkAnimation' href={whatsappUrl}>
<button  className="text-black   font-bold"
        >CLICK TO GET OFFER</button></Link>
    </div>
    
    </div>
       <h1 className="text-4xl fixed bg-yellow-400 text-black font-bold top-44 w-full  text-center border-4 rounded py-4 border-green z-10">{data.MobileName } SPECS</h1>
        
        
    <iframe className=" iframe" title='specs' frameborder="0" src={data.featuresUrl} />
    
   
    </div>
    
    )
}
export default productdetails