import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {CardGroup,Spinner } from 'react-bootstrap'
import News from './News'

function App() {
 const[data,setData] = useState([])
 const[loading,setLoading] = useState(true)


   const getNews = ()=> {
    axios.get(import.meta.env.VITE_API_KEY_NEWS_ORG)
    .then((respose)=>{
   
      setData(respose.data.articles)
      setLoading(false)
    })}

  useEffect(()=>{
  getNews()
  
  },[])

  return loading ? (
     <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    <div>
    
      <ul>
         <CardGroup>
      {data.map((item,i)=> (
      

  
       <li key={i}>
 <News  item ={item} />
       </li>
    
      
      
        
      ))}
      
       </CardGroup>
      </ul>
    </div>
  )
}

export default App
