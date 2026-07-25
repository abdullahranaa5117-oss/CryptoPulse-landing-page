import { Container, Button, Image, Nav, Navbar } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import userimg from '../../assets/user5.jpeg';
import InputGroup from 'react-bootstrap/InputGroup';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

function Navbars() {
    return (
        <>
            <Container fluid >
                <Row className='mt-1'>
                    <Col xs={2} lg={7}>
                        <Navbar expand="lg" >
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" >
                                <Nav className="me-auto p-2" >
                                    <Nav.Link className='text-light' href="#home">Dashboard</Nav.Link>
                                    <Nav.Link className='text-light' href="#link">Markets</Nav.Link>
                                    <Nav.Link className='text-light' href="#home">Watchlist</Nav.Link>
                                    <Nav.Link className='text-light' href="#link">Insight</Nav.Link>

                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>

                    <Col xs={10} lg={5}>
                        <Form>
                            <InputGroup className='m-2'>

                                <InputGroup.Text
                                    style={{ backgroundColor: '#131f3b', borderColor: '#111827', color: '#94A3B8' }}
                                    id="basic-addon1"><FaSearch /> </InputGroup.Text>

                                <Form.Control
                                    placeholder="Search cryptocurrency..."
                                    className="search-input shadow-none border-0"
                                    style={{
                                        background: "#131f3b",
                                        height: "45px"
                                    }}
                                />
                                <Button
                                    variant="dark"
                                    className="ms-2 rounded-circle"
                                    style={{
                                        width: "45px",
                                        height: "45px"
                                    }}>
                                    <FaRegBell />
                                </Button>
                                <div className='mt-1 ms-1'>
                                    <Image src={userimg} roundedCircle width={40}
                                        height={40}
                                    />
                                    <MdOutlineArrowDropDown />
                                </div>
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>

            </Container >
        </>
    );
}

export default Navbars;