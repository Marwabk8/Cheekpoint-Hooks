import{Card,Button, ListGroup}from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


function Cardmov ({el}) {


    return (
    <div className='card'>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.posterUrl} heigth="100%"/>
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <Card.Text>
 {el.description}
    </Card.Text>
   
  </Card.Body>
  <Card.Footer>
    <ListGroup className='list-group-flush'>
  <ReactStars
    count={5}
    value={el.rate}
    edit={false}
    size={24}
    activeColor="#ffd700"
  />
  </ListGroup></Card.Footer>
    <Card.Footer>
      
    <Link to={`/details/${el.id}`} > <Button variant="primary">Details</Button></Link>
    
</Card.Footer>
</Card>
    
    
    </div>
    
    )
    
    
    
    
     }
    
     export default Cardmov