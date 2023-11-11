
import "./onecomplaint.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowUp } from "react-icons/fa";
import {FaArrowDown} from "react-icons/fa";
function Onecomplaint({ com,up,down}) {
  return (
    <div className="onecomplaint card text-white bg-primary" style={{ width: '30rem', height: '10rem' }}>
      <div className="card-header">{com.regNo}</div>
      <div className="card-body">
        <p className="card-text">{com.complaint}</p>
      <div style={{display:'flex',width:'5rem',justifyContent:'space-evenly'}}>
      <button onClick={()=>up(com._id)} style={{backgroundColor:'rgba(0,0,0,0)',borderRadius:'40%',boxShadow:'.1rem .1rem .1rem '}}><FaArrowUp/></button>
       <b>{com.votes}</b>
      <button onClick={()=>down(com._id)} style={{backgroundColor:'rgba(0,0,0,0)',borderRadius:'40%',boxShadow:'.1rem .1rem .1rem '}}><FaArrowDown/></button>
      </div>
      </div>
    </div>
  );
}

export default Onecomplaint;
