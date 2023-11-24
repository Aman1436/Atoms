import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
function Complaintbox({submit}) {
const [complaint,setcomplaint]=useState('')
const handleChange=(e)=>{
   return setcomplaint(e.target.value)
}
  return (
    <Form style={{marginTop:'7rem'}}>
      <Form.Group className="mb-1 my-4" controlId="exampleForm.ControlTextarea1">
      <Form.Label style={{color:'white', fontSize:'1.5rem'}}>Write your complaint :</Form.Label>
        <Form.Control onChange={handleChange}
        style={{width:'25rem', border:'none', boxShadow:'0 0 50px -1px black', background:'rgba(0,0,0,.8)', color:'white', padding:'1rem', fontFamily: 'monospace'}}
        as="textarea" rows={6} placeholder='Type your complaint here...'/>
        
      </Form.Group>
      <Button onClick={()=>submit(complaint)} style={{backgroundColor:'#40a78b',width:'100%', marginTop: '1rem', border:'2px solid black', boxShadow:'0 0 8px -1px black'}}>
        Submit
      </Button>
    </Form>
  );
}

export default Complaintbox;