
import './App.css';
import{Button,Card} from 'react-bootstrap';
function Movidetails(props){

 const details= props.moviedata.find(el=>el.id==props.match.params.x)
console.log('props.moviedata',props)



    return(
//         <div className="details">
// <h1>{details.title}</h1>
// <h5>{details.description}</h5>
// <div className="embed-responsive embed-responsive-16by9">
//             <iframe className="embed-responsive-item" src={details.trailer} ></iframe>
//             </div>
//             <button onClick={()=>props.history.goBack()}>Return</button>
//         </div>

<div className='video'>
<Card style={{ width: '18rem' }}>

  <Card.Body>
    <Card.Title>{details.title}</Card.Title>
    <Card.Text>
    {details.description}
    <iframe className="embed-responsive-item" src={details.trailer} ></iframe>
    </Card.Text>
    <Button onClick={()=>props.history.goBack()} > Return </Button>
  </Card.Body>
</Card>
</div>


    )





}

export default Movidetails;