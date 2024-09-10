import { useState } from 'react'
import { useSum,sumProvider } from './context/contextProvider'

function App() {
  const [num1, setnum1] = useState(0)
  const [num2, setnum2] = useState(0)
  const [sum,setsum] = useState(0)

  const addArray =  (num1,num2,sum) = {

    sum: setsum(num1+num2)

  }

  return (
   <>
   <sumProvider value={{num1,num2,sum,addArray}}>

   </sumProvider>
   </>
  )
}

export default App
