import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const styles = {
  logo: {
    fontSize: "22px",
    color: "white",
    paddingRight: "10px",
    display: "flex",
    alignItems: "flex-start",
  },
  text: {
    fontSize: "18px",
    color: "white",
  },
  container: {
    paddingRight: "600px",
    height: "80px"
  },
  searchBar: {
    paddingLeft: "380px",
  },
  cart: {
    paddingLeft: "25px"
  },
  title: {
    fontSize: "18px",
    color: "white",
    paddingLeft: "540px",
  }
}


function Header() {
  return (
    <>
    <Navbar bg="dark" expand="lg" style={styles.container}>
      <Container>
        <Navbar.Brand style={styles.logo}>
        <a href="/"> 
          <img alt="PieIcon" src="/images/pie_two.svg" width="50" height="50" />
          </a>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"  style={styles.text}>Home</Nav.Link>
            <Nav.Link href="/menu"  style={styles.text}>Menu</Nav.Link>
            <Nav.Link href="/custom"  style={styles.text}>Custom</Nav.Link>
            <Navbar.Brand style={styles.title}>
              <h2>FAT FRANK'S PIES</h2>
            </Navbar.Brand>
          </Nav>
              <Form className="d-flex" style={styles.searchBar}>
                <Form.Control
                  style={{ width: "240px"}}
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <div style={styles.cart}>
                <a href="/checkout"> 
                 <img alt="" src="/images/Logos/cart.png" width="50" height="50" href="" />
                 </a>
              </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;