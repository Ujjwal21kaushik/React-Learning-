import { useContext } from "react";
import { UserContext } from "../context/Context";
import { useNavigate, useParams } from "react-router-dom";

export default function UserDetail() {
  const { id } = useParams();

  const { user } = useContext(UserContext);

  const navigate = useNavigate();
  const selectedUser = user.find((ele) => ele.id === Number(id));

  return (
    <div className="w-1/4 bg-red-200/20 m-auto p-6">
      <span className="text-[12px] text-zinc-600 font-medium">UserName:</span>
      <h1 className="bg-pink-300 py-2 px-2 rounded mb-2">
        {selectedUser.username}
      </h1>

      <span className="text-[12px] text-zinc-600 font-medium">Email:</span>
      <h1 className="bg-pink-300 py-2 px-2 rounded mb-2">
        {selectedUser.email}
      </h1>

      <span className="text-[12px] text-zinc-600 font-medium">Password:</span>
      <h1 className="bg-pink-300 py-2 px-2 rounded mb-2">
        {selectedUser.password}
      </h1>

        <div className="w-fit m-auto mt-4">
            <button 
            onClick={()=> navigate("/usershow")}
            className="px-2 py-1 bg-blue-600 rounded text-white"> Go back</button>
        </div>
    </div>
  );
}
