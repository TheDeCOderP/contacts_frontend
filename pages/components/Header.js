import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';





function Header() {

  
    


    const [show, setShow] = useState(false);

   

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar className="header_navbar">
      <Container>
   
  
      <Button variant="light" onClick={handleShow} className="header_menu">
      <img src='/menu-icon.png' style={{width:30}}></img>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header>
          <Offcanvas.Title> <Link href="/" onClick={handleClose}><Image src="/prabisha-logo.png" width={150} height={70}></Image></Link></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Link href="/" onClick={handleClose} >Home</Link>
        <Link href="/contacts" onClick={handleClose} >All Contacts</Link>
        <Link href="/add-contacts" onClick={handleClose} >Add New Contact</Link>

        </Offcanvas.Body>
      </Offcanvas>
  
        <h1 className="h3 text-light header_text">Welcome to Prabisha Consulting</h1>




     
      </Container>
    </Navbar>
  );
}

export default Header;