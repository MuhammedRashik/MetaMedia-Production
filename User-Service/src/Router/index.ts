import authRouter from "./authRoute/auth.router";
import express from 'express'


export const routes=(dependencies:any)=>{
    const router=express()
    router.use('/user',authRouter(dependencies))
  
    return router
}









