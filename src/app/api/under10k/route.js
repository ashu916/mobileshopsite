import {NextResponse} from 'next/server'
import connectMongoDb from '../../../../mongodb'
import under10k from '../../../../models/under10k'

 export const GET = async (request) =>{
  
  try{
    await connectMongoDb()
    const data = await under10k.find()
    return new NextResponse(JSON.stringify(data),{status:200})
  }
  catch(err){
    return new NextResponse('error in feting' + err,{status:500})
  }
  
}
