import {sayHelloRepo} from '../../adapters/repositories'
import {sayHello_usecase,addPostUseCase} from '../../applications/useCases'


const useCase:any={
    sayHello_usecase,
    addPostUseCase
}
const repositery:any={
    sayHelloRepo
}


export default {
    useCase,repositery
}