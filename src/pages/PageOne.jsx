import { Link } from "react-router-dom"
import Text from "../components/Text"
import React from 'react';
export default function PageOne(){
    return (
       <div className="bg-slate-900"> 
       
         <main className="grid grid-cols-1 ">
          <section className="grid grid-cols-4 gap-4 mx-20 my-5 rounded-3xl p-2 h-screen ">
           <div className="col-span-1 bg-red-300 gap-4 rounded-3xl ">
             <div className=" col-span-1 m-3">
              <div className="flex justify-center m-3">
               <img className="rounded-full w-50 mx-auto mt-5 shadow-xl/60 transition duration-300" src="images/IMG_3884.JPG" alt="Profile"  />
              </div>

              <div className="flex justify-center m-3">
                <Text
                title="Mr.Aung Pyae Oo"
                headColor="text-red-500"
                />
              </div>
             </div>
            
           </div>
           
           <div className="col-span-3 bg-yellow-300 gap-4 rounded-3xl">
            <nav className="bg-gray-300 rounded-t-3xl shadow-xl/30 mb-4 p-3 flex-1 flex items-center justify-between">
              <div className="flex space-x-4  align-middle">
                <Link className="bg-gray-600 p-2 rounded-md"  to={"/page-two"}>Home</Link>
                <Link className="p-2 rounded-md"  to={"/page-two"}>About</Link>
                <Link className="p-2 rounded-md"  to={"/page-two"}>Projects</Link>
                <Link className="p-2 rounded-md"  to={"/page-two"}>Contact</Link>
              </div>
              
            </nav>

            
            <div className="grid grid-cols-2 m-2 gap-3">
              <div className="col-span-2 bg-red-200 p-5 rounded-3xl">
                <Text
                 title= "Hello one"
                 description="I'm aCreative Frontend developer and Web designer from
                    Japan.I create custom websites to help businesses do better
                    online. I use HTML,CSS and JavaScript."
                 secondDes="phone Number"   
                 textColor="text-red-500"
                 headColor="text-blue-500"
                 />
                
              </div>
             
              <div className="col-span-1 bg-gray-300 p-5 rounded-3xl">
                <Text
                 title= "Hello Two"
                 description=" I'm a
                      Creative Frontend developer and Web designer from
                    Japan.I create custom websites to help businesses do better
                    online. I use HTML,CSS and JavaScript."
                 textColor="text-red-500"
                 />
                
              </div>
              <div className="col-span-1 bg-gray-300 p-5 rounded-3xl">
                <Text
                 title= "Hello three"
                 description=" One fdfg gf gir dfhdfduf dhfertberregfhdfgidfgdbfgudighuaj"
                 textColor="text-red-500"
                 />
                
              </div>
              
              
             
            
            </div>
           </div>
         
          </section>
         </main>
         
       </div>
       
    )
}