
import React from 'react';
import Link from 'next/link'

function Button(props) {


  
  return(

<button
          
          
          className={'flex  flex-row justify-center items-center  bg-blue-400 rounded' +' ' + props.width}
    onClick={props.onClick}
        >{props.title}</button>
  )
}
        
        export {Button}