import { Col, Container, Row } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

function Footer() {
    return (

        <>
            <Container fluid className="justify-content-center text-center" >

                <Row className="justify-content-between p-2">

                    <Col sm={12} md={3} lg={1} >

                        <h5>CryptoPulse</h5>
                    </Col>
                    <Col sm={12} md={3} lg={4}>
                        <p> &copy; 2026 CryptoPulse.  All right reserved.</p>
                    </Col>
                    <Col sm={12} md={3} lg={5}>

                        <div className=" d-flex gap-2 text-center justify-content-center">
                            <p><FaGithub /></p>
                            <p><FaTwitter /></p>
                            <p><FaLinkedin /></p>
                            <p><SiGmail /></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default Footer;