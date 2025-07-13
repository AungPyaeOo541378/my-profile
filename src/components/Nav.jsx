import { Link, useLocation } from "react-router-dom"

export default function Nav(){

    const location = useLocation();
    const isActive =(path)=>{
        return location.pathname === path;
    }
    
    return(
        <nav className="bg-gray-600 rounded-t-3xl shadow-xl/30 mb-4 p-3 flex-1 flex items-center justify-between">
              <div className="flex space-x-4  align-middle">
                <Link  className={`${isActive("/") ? "bg-gray-900" : ""} p-2 rounded-md text-white`}   to={"/"}>Home</Link>
                <Link  className={`${isActive("/page-two") ? "bg-gray-900" : ""} p-2 rounded-md text-white`}  to={"/page-two"}>About</Link>
                <Link  className={`${isActive("/page-three") ? "bg-gray-900" : ""} p-2 rounded-md text-white`}  to={"/page-three"}>Projects</Link>
                <Link  className={`${isActive("/page-four") ? "bg-gray-900" : ""} p-2 rounded-md text-white`}  to={"/page-four"}>Contact</Link>
              </div>
              
            </nav>
    )
}