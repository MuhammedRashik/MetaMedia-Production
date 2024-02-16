import sayHello_controller from "./sayHello_controller";
import addPost_controller from "./addPost_controller";

export default (dependencies:any)=>{
 return {

     sayHelloController:sayHello_controller(dependencies),
     addPost_controller:addPost_controller(dependencies)
 }

}