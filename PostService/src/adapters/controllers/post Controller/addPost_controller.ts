import {Request,Response} from 'express'



export default (dependecies:any)=>
{
    const {useCase :{addPostUseCase}}=dependecies

    const addPostController=async(req:Request,res:Response)=>{

        const body=req.body
        console.log('this is file',req.files);
        console.log(req.body,'this is ikages');
        const responce = await addPostUseCase(dependecies).executeFunction()
        res.send(responce)

    }

    return addPostController
}