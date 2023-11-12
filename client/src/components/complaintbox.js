import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
function Complaintbox({submit}) {
const [complaint,setcomplaint]=useState('')
const handleChange=(e)=>{
   return setcomplaint(e.target.value)
}
  return (
    <Form>
      <Form.Group className="mb-1 my-4" controlId="exampleForm.ControlTextarea1">
        <Form.Label style={{color:'white'}}>Write your complaint::</Form.Label>
        <Form.Control onChange={handleChange}
        style={{width:'25rem'}}
        as="textarea" rows={12}/>
        
      </Form.Group>
      <Button onClick={()=>submit(complaint)} style={{backgroundColor:'rgb(93,190,163)',width:'100%'}}>
        Submit
      </Button>
    </Form>
  );
}

export default Complaintbox;