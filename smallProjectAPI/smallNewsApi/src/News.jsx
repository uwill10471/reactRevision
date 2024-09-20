import React from 'react'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
function News(props) {
    
  return (
   <>
  
   
  
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.item.urlToImage} />
      <Card.Body>
        <Card.Title>{props.item.title}</Card.Title>
        <Card.Text>
         {props.item.description}
        </Card.Text>
     <Button href={props.item.url}>Read Here</Button>
      </Card.Body>
    </Card>

   
   </>
  )
}

export default News
