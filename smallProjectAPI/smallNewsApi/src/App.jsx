import React,{useState,useId,useEffect} from 'react'
import axios from 'axios'
import { Button,CardGroup } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
function App() {
 const[data,setData] = useState([])
 const id = useId()

   const getNews = ()=> {
    axios.get(import.meta.env.VITE_API_KEY_NEWS_ORG)
    .then((respose)=>{
      console.log(respose.data.articles);
      setData(respose.data.articles)
    })}

  useEffect(()=>{
  getNews()
  
  },[])

  return (
    <div>
    
      <ul>
         <CardGroup>
      {data.map((item)=> (
       
        // {item.title}
        // <div>
        //  <img src={item.urlToImage} height="180px" width="180px" alt="" />
        //  </div>
        //  <p>{item.description}</p>
        //  <p>{item.content}</p>
        //  <label htmlFor="">Link - </label>
        //  <a href={item.url}>main</a>
        // 
        <>
<li key={id} >
  
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.urlToImage} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
         {item.description}
        </Card.Text>
 <Button href={item.url}>Read Here</Button>
      </Card.Body>
    </Card>
   
       </li> 
       <br />
      </>
        
      ))}
      <br />
      <br />
       </CardGroup>
      </ul>
    </div>
  )
}

export default App
