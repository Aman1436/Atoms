
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavScrollExample({regNo}) {
  return (
    <Navbar style={{padding:'0rem',marginBottom:'2rem'}} fixed='top' expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Welcome {regNo}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',display:'flex',alignItems:'flex-end'}}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Menu</Nav.Link>
            <Nav.Link href="#action2">View Complaints</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;