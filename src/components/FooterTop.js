import { Col, Container, Row } from "react-bootstrap";

const FooterTop = () => {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <div className="footer-top">
                    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
                        <h2>Heading</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illo. </p>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="footer-top">
                        <h2>Heading</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="footer-top last">
                        <h2>Heading</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illo. </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default FooterTop;