import { useState } from "react";
import {Button,Modal,Form} from "react-bootstrap"
import Star from "./Star";

 function Add({moviedata,setMovidata}) {
  const[title,setTitle]= useState("")
  const[description,setDescription]= useState("")
  const [url,setUrl]= useState("")
  const [rating,setRating]=useState('')

        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
       
      
        const Ajouter=()=>{setMovidata([...moviedata,{
        title: title,
        description: description,
        posterUrl:url,
        rate:rating,
        }
    ]
        )
        }

        return (
          <>
            <Button variant="primary" onClick={handleShow}>
              Add 
            </Button>
      
            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Add</Modal.Title>
              </Modal.Header>
              <Modal.Body> 

                <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> Title </Form.Label>
              <Form.Control type="title" placeholder="Enter title" onChange={(e)=>setTitle(e.target.value)} value={title} />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> Description </Form.Label>
              <Form.Control type="Description" placeholder="Enter Description" onChange={(e)=>setDescription(e.target.value)} value={description}/>
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> Photo </Form.Label>
              <Form.Control type="Photo" placeholder="Enter Photo"  onChange={(e)=>setUrl(e.target.value)} value={url}/>
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> Raiting </Form.Label>
            <Star rating={rating} setRating={setRating}> </Star>
            </Form.Group>
           
            </Modal.Body>
              <Modal.Footer>
             
                <Button variant="primary" onClick={()=>{Ajouter();handleClose()}}>
                  Add 
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }


export default Add;