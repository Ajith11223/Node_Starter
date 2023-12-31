import express from 'express'
import mongoose from 'mongoose'
import SampleRouter from './Router/SampleRouter.js'



const app = express()

app.use(express.json())

mongoose.connect(process.env.MONGO).then(()=>{
    app.listen(5000,()=>{
        console.log("server connected 5000")
    })
}).catch((err)=>{
    console.log("server not connected")
    console.log(err)
})


app.use('/api',SampleRouter)