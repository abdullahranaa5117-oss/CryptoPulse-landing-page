

// cryptopulse
import { Container, Row, Col } from 'react-bootstrap';
import Cards from "./components/Crypto/cards";
import Navbars from "./components/Crypto/navbar"
import Bar from "./components/Crypto/sidebar";
import Footer from './components/Crypto/footer';
import Headers from './components/Crypto/header';

function App() {

    return (
        <>
            <Container fluid>
                <Row>
                    <Col lg={2} style={{ backgroundColor: '#070B18' }}>
                        <Bar />
                    </Col>
                    <Col lg={10} >
                        <Navbars />
                        <Cards />
                        <Headers />
                        <Footer />

                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default App;
