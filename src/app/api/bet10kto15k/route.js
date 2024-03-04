import {NextResponse} from 'next/server'
import connectMongoDb from '../../../../mongodb'
import bet10kto15k from '../../../../models/bet10kto15k'

 export const GET = async (request) =>{
  
  try{
    await connectMongoDb()
    const data = await bet10kto15k.find()
    return new NextResponse(JSON.stringify(data),{status:200})
  }
  catch(err){
    return new NextResponse('error in feting' + err,{status:500})
  }
  
}
