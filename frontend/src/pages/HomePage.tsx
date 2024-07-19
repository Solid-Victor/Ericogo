import { Row, Col } from "react-bootstrap";
import { sampleProducts } from "../data";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <Row>
      {sampleProducts.map((product) => {
        return (
          <Col key={product.slug} sm={6} md={4} lg={3}>
            <Link to={"/product/" + product.slug}>
              <img
                src={product.image}
                alt={product.image}
                className="product-image"
              />
              <h2>{product.name}</h2>
            </Link>
          </Col>
        );
      })}
    </Row>
  );
}

export default HomePage;