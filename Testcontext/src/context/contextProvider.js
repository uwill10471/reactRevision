import {useContext,createContext} from 'react'

const sumContext = createContext({
    ArrayList: [
        {
            num1: 0,
            num2: 0,
            sum: 0
        }
    ],
   

    addArray: (num1,num2,sum)=>{
          
    }
})

export const  sumProvider = sumContext.Provider

export const useSum = ()=> {
    return useContext(sumContext)
}