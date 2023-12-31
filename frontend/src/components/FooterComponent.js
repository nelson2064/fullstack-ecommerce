import { Container, Row, Col } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer>
      <Container fluid>
        <Row className="mt-5">
          <Col className="bg-dark text-white text-center py-5" style={{
            background: "linear-gradient(to bottom, #FF5733, #FF8C00, #FFD700)", // Adjust gradient colors as needed
            borderRadius: "10px", // Add border-radius for a rounded look
            boxShadow: "0px -4px 8px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
          }}>
            Copyright &copy; Best Online Shop
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
