
import "./onecomplaint.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowUp } from "react-icons/fa";
import {FaArrowDown} from "react-icons/fa";
function Onecomplaint({ com,up,down}) {
  return (
    <div className="onecomplaint card text-white bg-primary" style={{ width: '35em', height: '10em',borderRadius:'1.5rem'}}>
      <div className="card-header">{com.regNo}</div>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',padding:'.3rem'}} className="card-body">
        <p style={{padding:'0px'}} className="card-text">{com.complaint}</p>
      <div style={{display:'flex',width:'5rem',justifyContent:'space-evenly'}}>
      <button onClick={()=>up(com._id)} style={{border:'1px solid white',backgroundColor:'rgba(0,0,0,0)',borderRadius:'40%',boxShadow:'.2rem .2rem 1rem white'}}><FaArrowUp style={{color:'green'}} /></button>
       <b style={{color:'black'}}>{com.votes}</b>
      <button onClick={()=>down(com._id)} style={{border:'1px solid white',backgroundColor:'rgba(0,0,0,0)',borderRadius:'40%',boxShadow:'.2rem .2rem 1rem white'}}><FaArrowDown style={{color:'red'}} /></button>
      </div>
      </div>
    </div>
  );
}

export default Onecomplaint;
