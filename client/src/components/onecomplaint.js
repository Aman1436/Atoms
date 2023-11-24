
import "./onecomplaint.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowUp } from "react-icons/fa";
import {FaArrowDown} from "react-icons/fa";
function Onecomplaint({ com,up,down}) {
  return (
    <div style={{top:'40rem', width: '35em', height: '10em',borderRadius:'1.5rem', margin:'1rem', backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,.1))', boxShadow:'0 0 8px -1px black', color:'white', padding:'1rem'}}>
      <div className="card-header" style={{borderBottom: '2px solid white', fontWeight:'600'}}>{com.regNo}</div>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between', paddingBottom:'1rem'}} className="card-body">
        <p style={{padding:'1rem 0'}} className="card-text">{com.complaint}</p>
      <div style={{display:'flex',width:'5rem',justifyContent:'space-evenly', marginBottom:'1rem'}}>
        <button onClick={()=>up(com._id)} style={{minWidth:'1rem', backgroundColor:'rgba(0,0,0,0)',borderRadius:'10px', boxShadow:'0 0 4px -1px white', border:'none', marginRight:'.4rem '}}><FaArrowUp style={{color:'green'}} /></button>
        <b style={{color:'white', fontWeight:'300'}}>{com.votes}</b>
      <button onClick={()=>down(com._id)} style={{backgroundColor:'rgba(0,0,0,0)',borderRadius:'10px',boxShadow:'0 0 4px -1px white', marginLeft:'1rem', border:'none'}}><FaArrowDown style={{color:'red'}} /></button>
          </div>
      </div>
    </div>
  );
}

export default Onecomplaint;
