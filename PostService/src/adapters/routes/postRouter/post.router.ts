
import express from 'express'
import {postController} from '../../controllers'
import { upload } from '../../multer/multerSetUp'
const verifyToken=require ('metamedia_auth')
export default (dependencies:any)=> {

    const router = express()
    const {sayHelloController,addPost_controller} = postController(dependencies)

    router.get('/sayHello',verifyToken,sayHelloController)
    router.post('/addPost',upload.array('images',5),addPost_controller)



    return router
}