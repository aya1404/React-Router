import React, { useState } from 'react'
import {Button,Modal,Col,Form,Row} from 'react-bootstrap';


const Add = ({show,handleClose,addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    id:7,
    title:"",
    rating:1,
    posterUrl:"",
    trailer:"",
    description:"",
  })
  const handleChange=(e)=>{
    setNewMovie({...newMovie,[e.target.name]:e.target.value})
  }
  
  return (
    <div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add a movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" type="text" placeholder="Enter the title" onChange={handleChange}/>
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Rate</Form.Label>
          <Form.Control name="rating" type="float" placeholder="rate of the movie" onChange={handleChange}/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Poster Url</Form.Label>
        <Form.Control name="posterUrl" type='url' placeholder="Paste the url here" onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Trailer Url</Form.Label>
        <Form.Control name="trailer" type='url' placeholder="Paste the trailer url here" onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control name="description" as="textarea" rows={3} placeholder="Add some description to the movie" onChange={handleChange}/>
      </Form.Group>

    </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={()=>{addMovie(newMovie);handleClose()}}>
                Add
            </Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default Add