import { useState,useContext } from "react";
import { useSum } from "../context/contextProvider";

export default function Form(){
      const [num1,setnum1] = useState(0)
      const [num2,setnum2] = useState(0)
      const [sum,setsum] = useState(0)
      const {addArray} = useSum()

      
     
    return(
         <form onSubmit={add}>
            <input type="number" 
            value = {num1} 
            onChange={(e)=>{setnum1(e.target.value)}}/>
             <input type="number" 
            value = {num2} 
            onChange={(e)=>{setnum2(e.target.value)}}/>
            <button type="submit"></button>
          </form>    )
}