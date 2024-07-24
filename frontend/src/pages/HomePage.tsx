import { getError } from "../types/utils";

import { ApiError } from "../types/ApiError";
import { Helmet } from "react-helmet-async";
import { Row, Col } from "react-bootstrap";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import ProductItem from "../components/ProductItem";
import { useGetProductsQuery } from "../hooks/productHooks";


function HomePage() {
  const { data: products, isLoading, error } = useGetProductsQuery()

  return isLoading ? (
    <LoadingBox />
  ) : error ? (<>
    {console.log(error)}
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
    </>
  ) : (
    <Row>
      <Helmet>
        <title>Ericogo</title>
      </Helmet>

      {product?.map((product) => {
        return (
          <Col key={product.slug} sm={6} md={4} lg={3}>
            <ProductItem product={product} />
          </Col>
        );
      })}
    </Row>
  );
}

export default HomePage;
