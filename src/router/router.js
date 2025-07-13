import React from "react";
import { Routes , Route} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
export default function Router(){
    
return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/page-two" element={<About/>}/>
        <Route path="/page-three" element={<Project/>}/>
        <Route path="/page-four" element={<Contact/>}/>
    </Routes>
);
}