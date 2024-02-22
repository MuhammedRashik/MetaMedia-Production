import {
    sayHelloRepo,
    createPostRepo,
    getAllPostOfUser,
    showAllPostRepo,
    addLikerepo,
    addComment,
    addReplayToCommentRepo,
    deleteCommentRepo,
    reportPostRepo
} from '../../adapters/repositories'

import {
    sayHello_usecase,
    addPostUseCase,
    searchLocation_useCase,
    getLatAndLog_useCase,
    getAllPostOfUser_useCase,
    showAllPost_useCase,
    likePost_UseCase,
    addComment_UseCase,
    addReplayToComment_UseCase,
    deleteComment_UseCase,
    reportPost_UseCase


} from '../../applications/useCases'



const useCase:any={
    sayHello_usecase,
    addPostUseCase,
    searchLocation_useCase,
    getLatAndLog_useCase,
    getAllPostOfUser_useCase,
    showAllPost_useCase,
    likePost_UseCase,
    addComment_UseCase,
    addReplayToComment_UseCase,
    deleteComment_UseCase,
    reportPost_UseCase
}
const repositery:any={
    sayHelloRepo,
    createPostRepo,
    getAllPostOfUser,
    showAllPostRepo,
    addLikerepo,
    addComment,
    addReplayToCommentRepo,
    deleteCommentRepo,
    reportPostRepo


}


export default {
    useCase,repositery
}