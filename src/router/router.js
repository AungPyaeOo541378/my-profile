import React from "react";
import { Routes , Route} from "react-router-dom";
import PageOne from "../pages/PageOne";
import PageTwo from "../pages/PageTwo";
export default function Router(){
    
return(
    <Routes>
        <Route path="/" element={<PageOne/>}/>
        <Route path="/page-two" element={<PageTwo/>}/>
    </Routes>
);
}