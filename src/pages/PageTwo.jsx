import Text from "../components/Text"
import { Link } from "react-router-dom"
export default function PageTwo(){
    return (
       <div> 
        <h1>Page Two</h1>
        <Link to={"/"}>Go to PageOne</Link>
        <div className="grid grid-cols-2">
         <Text 
         title= "Hello one"
         description=" One fdfg gf gir dfhdfduf dhfertberregfhdfgidfgdbfgudighuaj"
         textColor="text-red-500"
         />

          <Text 
         title= "Hello one"
         description=" Two fdfg gf gir dfhdfduf dhfertberregfhdfgidfgdbfgudighuaj"
         textColor="text-yellow-500"/>
         
         </div>
       </div>
    )
}