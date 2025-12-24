import mongoose from "mongoose";

export const mongoConnect =async () =>{
    try{
        console.log("console reach here")
        const conn =  await mongoose.connect(process.env.MONGO_URI)
        console.log(conn)
        console.log(`mongodb connected tp ${conn.connection.host}`)
        
    }catch(error){
        console.log('error in connecting to mongodb')
        process.exit(1);
    }
}