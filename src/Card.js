import{Card,Button}from 'react-bootstrap';



function Cardmov ({el}) {


    return (
    <div>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.posterUrl}/>
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <Card.Text>
 {el.description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    
    
    </div>
    
    )
    
    
    
    
     }
    
     export default Cardmov