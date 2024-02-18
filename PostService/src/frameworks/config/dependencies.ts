import {sayHelloRepo,createPostRepo} from '../../adapters/repositories'

import {sayHello_usecase,addPostUseCase,searchLocation_useCase,getLatAndLog_useCase} from '../../applications/useCases'


const useCase:any={
    sayHello_usecase,
    addPostUseCase,
    searchLocation_useCase,
    getLatAndLog_useCase
}
const repositery:any={
    sayHelloRepo,
    createPostRepo

}


export default {
    useCase,repositery
}