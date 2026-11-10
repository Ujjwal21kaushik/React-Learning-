import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routers from "./utils/Routers";

export default function App() {
  return (
    <>
    <ToastContainer position="top-right" autoClose={2000} />

    
    <Routers />  
    </>
  );
}
