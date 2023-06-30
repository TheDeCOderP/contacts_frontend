import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar className="bg-dark text-light footer">
      <Container>
       
          <Navbar.Text>
          © Prabisha Consulting Limited (UK). All Rights Reserved 
          </Navbar.Text>
        
      </Container>
    </Navbar>
  );
}

export default Header;