import Text from "../components/Text"
import React from 'react';
import Nav from "../components/Nav";
import LeftSection from "../components/LeftSection";
export default function About(){
    return (
       <div className="bg-slate-800"> 
       
         <main className="grid grid-cols-1 ">
          <section className="grid grid-cols-4 gap-4 mx-20 my-5 rounded-3xl p-2 h-screen ">
           <LeftSection/>
           
           <div className="col-span-3 bg-yellow-300 gap-4 rounded-3xl">
            <Nav/>
              
          

            
            <div className="grid grid-cols-2 m-2 gap-3">
              <div className="col-span-2 bg-red-200 p-5 rounded-3xl">
                <Text
                 title= "About"
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