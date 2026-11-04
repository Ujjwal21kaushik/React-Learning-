import { useContext } from "react";
import { UserContext } from "../context/Context";
import {Link, Outlet} from "react-router-dom";


export default function Usershow(){
    const {user, setUser} = useContext(UserContext);

    
    
    return(
        <div className="p-15">
            <h1 className="text-3xl font-semibold">User List</h1>

            <div className="w-full mt-6 flex flex-col p-2">
                {
                    user.map((ele, idx)=>(

                        <Link 
                        to={`/usershow/${ele.id}`} 
                        key={ele.id} 
                        className="w-fit px-4 py-1 bg-blue-600 text-white rounded mb-2">
                             {ele.username}
                        </Link>
                    ))
                }
                
            </div>
            <hr className="mb-6 " />
            
            <Outlet />
        </div>
    )
}
{/* <UserDetail /> */}
