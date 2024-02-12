import { SetSidebarOpenFunction } from "src/pages/user/Home"
import SelectPostModal from "./SelectPostModal"

const Post: React.FC<SetSidebarOpenFunction> = ({setSidebarOpen}) => {

    setSidebarOpen(true)
    return (
        <>
       <SelectPostModal/> 
       
        </>
    )
}

export default Post

