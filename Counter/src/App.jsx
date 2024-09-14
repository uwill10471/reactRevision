import { useState } from 'react'


function App() {
  let [count, setCount] = useState(15)
  

  const addValue = () => {
    if(count < 20){
    count = count +1;
    setCount(count)  ; }
  }
  
  const removeCount = () => {
    if(count > 0){
    count = count -1 ;
    setCount(count); }
  }


  return (
    <>
      <h1>React Revision</h1>
      <h2>Counter value : {count}</h2>
      
      <button onClick={addValue}>Add Value {count}</button>
      <br />
      <button onClick = {removeCount}>Remove Value {count}</button>
    </>
  )
}

export default App
