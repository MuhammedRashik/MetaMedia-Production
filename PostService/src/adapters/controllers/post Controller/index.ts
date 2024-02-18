import sayHello_controller from "./sayHello_controller";
import addPost_controller from "./addPost_controller";
import searchLocation_controller from "./searchLocation_controller";
import getLatAndLog_controller from "./getLatAndLog_controller";
export default (dependencies:any)=>{
 return {

     sayHelloController:sayHello_controller(dependencies),
     addPost_controller:addPost_controller(dependencies),
     searchLocation_controller:searchLocation_controller(dependencies),
     getLatAndLog_controller:getLatAndLog_controller(dependencies)
 }

}