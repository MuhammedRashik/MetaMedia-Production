import {sayHelloRepo,createPostRepo,getAllPostOfUser} from '../../adapters/repositories'

import {sayHello_usecase,addPostUseCase,searchLocation_useCase,getLatAndLog_useCase,getAllPostOfUser_useCase} from '../../applications/useCases'


const useCase:any={
    sayHello_usecase,
    addPostUseCase,
    searchLocation_useCase,
    getLatAndLog_useCase,
    getAllPostOfUser_useCase
}
const repositery:any={
    sayHelloRepo,
    createPostRepo,
    getAllPostOfUser

}


export default {
    useCase,repositery
}