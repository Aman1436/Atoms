import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Complaintbox from './components/complaintbox.js';
import axios from 'axios';
import { useEffect, useState, React } from 'react';
import Onecomplaint from './components/onecomplaint.js';
import Navbar from './components/navbar';
import {useParams} from 'react-router-dom';

function App(){
  const {regNo}=useParams();
  const [complaints, setComplaints] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8080/regNo/complaint')
      .then(response => {
        return setComplaints(response.data);
      })
      .catch(err => console.log(err));
  },[]);
  const upvote=async(id)=>{
    await axios.put(`http://localhost:8080/${id}/complaint/upvote`,{complaintId:id})
     .then(response=>{
      setComplaints(response.data)
     })
     .catch(err=>{
      console.log(err)
     })
  }
   const downvote=async(id)=>{
    await axios.put(`http://localhost:8080/${id}/complaint/downvote`,{complaintId:id})
     .then(response=>{
      setComplaints(response.data)
     })
     .catch(err=>{
      console.log(err)
      })
      .catch(err=>{
        console.log(err)
      })
  }
  
  return (
    <div className='app'>
      <div style={{marginBottom:'3rem'}}><Navbar regNo={regNo}/></div>
      
      <div style={{display:'flex',justifyContent:'flex-end'}}>
        <div style={{position:'fixed',left:'5rem',top:'5rem'}}><Complaintbox submit={submitcomplaint} /></div>
    <div className='complaints'>{complaints.map((complaint)=>{
      return <Onecomplaint com={complaint} up={upvote} down={downvote}/>
    })}
    </div>
    </div>
    </div>
  );
}

export default App;
