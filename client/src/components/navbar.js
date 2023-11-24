
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavScrollExample({regNo}) {
  return (
    <Navbar style={{padding:'0rem',marginBottom:'2rem', backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,.1)', color:'white'}} fixed='top' expand="lg">
      <Container fluid>
      <Navbar.Brand href="#" style={{color:'white', marginLeft:'2rem'}}>Welcome {regNo}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{width:'100%', maxHeight: '100px', display:'flex', alignItems:'center'}}
            navbarScroll
          >
            <Nav.Link href ={"http://localhost:8080/home?regNo="+regNo} style={{color:'white', marginLeft:'38rem', marginRight:'4rem'}}>Home</Nav.Link>
            <Nav.Link href="/menu"  style={{color:'white', marginRight:'4rem'}}>Menu</Nav.Link>
            <Nav.Link href="#"  style={{color:'white', marginRight:'4rem'}}>View Complaints</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;