import {Navbar, Container, Nav} from "react-bootstrap"

const NavBar = () => {
  return (
    <div>
      <Navbar variant="dark">
          <Container>
            <Navbar.Brand href="/">SURONO FILM</Navbar.Brand>
            <Nav>
              <Nav.Link href="#trendings">TRENDING</Nav.Link>
              <Nav.Link href="#superheroes">SUPERHERO</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;