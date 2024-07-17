import { Col, Container, Nav, Navbar, NavbarBrand, Row } from "react-bootstrap";
import { sampleProducts } from "./data";

function App() {
  return (
    <div className="d-flex flex-column flex-center h-full">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <NavbarBrand>Ericogo</NavbarBrand>
          </Container>
          <Nav>
            <a href="/cart" className="nav-link">
              Cart
            </a>
            <a href="/signin" className="nav-link">
              Sign in
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Row>
            {sampleProducts.map((product) => {
              return (
                <Col key={product.slug} sm={6} md={4} lg={3} >
                  <img
                    src={product.image}
                    alt={product.image}
                    className="product-image"
                  />
                  <h2>{product.name}</h2>
                </Col>
              );
            })}
          </Row>
        </Container>
      </main>
      <footer>
        <div className="text-center">All right reserved</div>
      </footer>
    </div>
  );
}

export default App;
