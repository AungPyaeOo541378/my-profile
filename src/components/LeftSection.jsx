import { useState,useEffect } from "react";
import Text from "./Text"
export default function LeftSection(){
   

    return(
            <div className="col-span-1 bg-gray-900 gap-4 rounded-3xl ">
                     <div className=" col-span-1 m-3">
                      <div className="flex justify-center m-3">
                       <img className="rounded-full w-25  mt-5 shadow-xl/60 transition duration-300" src="images/IMG_3884.JPG" alt="Profile"  />
                      </div>
        
                      <div className="flex justify-center m-3">
                        <Text
                        title="Mr.Aung Pyae Oo"
                        headColor="text-red-500"
                        />
                      </div>
                      <div>
                      
                      </div>
                     </div>
                    
            </div>
                   
    )
}