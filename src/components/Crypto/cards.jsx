import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import { FaArrowRight, FaBitcoin, FaChartBar, FaChartPie, FaCoins } from 'react-icons/fa6';
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import coin from '../../assets/coin.jfif'

function Cards() {
    return (
        <>

            <Container fluid
                style={{
                    background: "#03081a",
                }} className='p-2'>
                <Row>
                    <Col lg={6} className='mt-2 '>
                        <p>Welcome Back !</p>
                        <h2>Track Crypto
                            <br />
                            <span className='text-primary'>
                                Smarter
                            </span>
                        </h2>
                        <p>Real-time market data , powerful analytics,
                            <br />
                            and beautiful insights -- all in one place</p>
                        <Button
                            style={{
                                background: "#2563EB",
                                border: "none",
                                padding: "12px 30px",
                                borderRadius: "12px"
                            }}
                        >
                            Explore Market  <FaArrowRight /> </Button>
                    </Col>
                    <Col lg={6}>

                        <Image
                            src={coin}
                            style={{ width: '100%', height: '100%' }}

                        />
                    </Col>
                </Row>
            </Container>
            <Container fluid className='mt-3'>
                <Row>
                    <Col lg={3} >
                        <Card
                            style={{
                                background: "#0c1831",
                                border: "1px solid #2e3c5a",
                                borderRadius: "18px"
                            }}
                            className='text-white  mt-2'
                        >
                            <Card.Body className="d-flex justify-content-between align-items-center">
                                <div>
                                    <p>Total Coins
                                        <br />
                                        <span className='fw-bold fs-4'>
                                            12,543 </span>
                                        <br />
                                        <span className='text-success'>
                                            <TiArrowSortedUp />+128 this week
                                        </span>
                                    </p>
                                </div>
                                <div
                                    style={{
                                        width: "65px",
                                        height: "65px",
                                        borderRadius: "50%",
                                        background: "rgba(59,130,246,.15)",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        fontSize: "28px",
                                        color: "#3B82F6"
                                    }}
                                >
                                    <FaCoins />
                                </div>
                            </Card.Body>
                        </Card>

                    </Col>

                    <Col lg={3} >
                        <Card
                            style={{
                                background: "#0c1831",
                                border: "1px solid #2e3c5a",
                                borderRadius: "18px"
                            }}
                            className='text-white  mt-2'
                        >
                            <Card.Body className="d-flex justify-content-between align-items-center">
                                <p>Total Market Cap
                                    <br />
                                    <span className='fw-bold fs-4'>
                                        $2.87 Trillion </span>
                                    <br />
                                    <span className='text-danger'>
                                        <TiArrowSortedDown />-1.24%
                                    </span>
                                </p>
                                <div
                                    style={{
                                        width: "65px",
                                        height: "65px",
                                        borderRadius: "50%",
                                        background: "rgba(92, 43, 102, 0.95)",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        fontSize: "28px",
                                        color: "#c413e7f3"
                                    }}
                                >
                                    <FaChartPie />
                                </div>
                            </Card.Body>
                        </Card>

                    </Col>

                    <Col lg={3} >
                        <Card
                            style={{
                                background: "#0c1831",
                                border: "1px solid #2e3c5a",
                                borderRadius: "18px"
                            }}
                            className='text-white  mt-2'
                        >
                            <Card.Body className="d-flex justify-content-between align-items-center">
                                <p>24h Volume Cap
                                    <br />
                                    <span className='fw-bold fs-4'>
                                        $142.79 Billion </span>
                                    <br />
                                    <span className='text-success'>
                                        <TiArrowSortedUp />+3.24%
                                    </span>
                                </p>
                                <div style={{
                                    width: "65px",
                                    height: "65px",
                                    borderRadius: "50%",
                                    background: "rgba(50, 112, 74, 0.95)",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: "28px",
                                    color: "#16ce69f3"
                                }}
                                >

                                    <FaChartBar />
                                </div>

                            </Card.Body>
                        </Card>

                    </Col>

                    <Col lg={3} >
                        <Card
                            style={{
                                background: "#0c1831",
                                border: "1px solid #2e3c5a",
                                borderRadius: "18px"
                            }}
                            className='text-white mt-2'
                        >
                            <Card.Body className="d-flex justify-content-between align-items-center">
                                <p>Btc Dominance
                                    <br />
                                    <span className='fw-bold fs-4'>
                                        52.43
                                    </span>
                                    <br />
                                    <span className='text-danger'>
                                        <TiArrowSortedDown />-0.68%
                                    </span>
                                </p>
                                <div style={{
                                    width: "65px",
                                    height: "65px",
                                    borderRadius: "50%",
                                    background: "rgba(133, 84, 51, 0.95)",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: "28px",
                                    color: "#ce6016f3"
                                }}
                                >

                                    <FaBitcoin />
                                </div>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container >

        </>
    )
}
export default Cards;