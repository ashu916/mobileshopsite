import {NextResponse} from 'next/server'
import connectMongoDb from '../../../../mongodb'
import above20k from '../../../../models/above20k'

 export const GET = async (request) =>{
  
  try{
    await connectMongoDb()
    const data = await above20k.find()
    return new NextResponse(JSON.stringify(data),{status:200})
  }
  catch(err){
    return new NextResponse('error in feting' + err,{status:500})
  }
  
}
