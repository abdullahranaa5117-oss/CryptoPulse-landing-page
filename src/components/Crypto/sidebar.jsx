import { FaArrowUpRightDots, FaRegStar } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { CiWavePulse1 } from "react-icons/ci";
import { Button, Row, Col, Card } from "react-bootstrap";

function Bar() {
    return (
        <>
            <div>
                <p className="fs-2 fw-bold mt-2"> <span className="text-primary"><CiWavePulse1 /> </span> CryptoPulse</p>
            </div>

            <Row className="mt-3">

                <Col lg={12} className="mt-3">
                    <Button className="w-100 text-start text-light" variant="outline-primary"> <IoHomeOutline />  Overview</Button>
                </Col>
                <Col lg={12} className="mt-3">

                    <Button className="w-100 text-start text-light" variant="outline-primary"> <FaArrowUpRightDots />  Markets</Button>
                </Col>
                <Col lg={12} className="mt-3">

                    <Button className="w-100 text-start text-light" variant="outline-primary"><FaRegStar /> Watchlist</Button>
                </Col>
                <Col lg={12} className="mt-3">
                    <Button className="w-100 text-start text-light" variant="outline-primary"><IoMdSettings /> Settings</Button>

                </Col >

            </Row>
            <div>
                <Card className="mt-4 p-4" style={{
                    background: 'linear-gradient(135deg, #2355e0, #b910b9)'
                }}>
                    <p className="text-light fw-bold">Stay Ahead in
                        <br />
                        Crypto World
                    </p>
                    <p className="text-light">
                        Get real-time alerts and never missimportant market moves.
                    </p>

                    <Button className="w-100">Enable Alerts</Button>
                </Card>
            </div>

        </>
    )
}
export default Bar;