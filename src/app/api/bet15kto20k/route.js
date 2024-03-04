import {NextResponse} from 'next/server'
import connectMongoDb from '../../../../mongodb'
import bet15kto20k from '../../../../models/bet15kto20k'

 export const GET = async (request) =>{
  
  try{
    await connectMongoDb()
    const data = await bet15kto20k.find()
    return new NextResponse(JSON.stringify(data),{status:200})
  }
  catch(err){
    return new NextResponse('error in feting' + err,{status:500})
  }
  
}
