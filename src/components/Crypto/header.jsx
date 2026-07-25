import { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row, Spinner, Table, Form, Card, Badge } from "react-bootstrap";
import { FaArrowDownLong, FaArrowTrendUp, FaStar } from "react-icons/fa6";
import Alert from "react-bootstrap/Alert";
function Headers() {
    const [coins, setCoin] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");

    const fetchcrypto = async () => {
        try {
            setLoading(true)

            const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false");
            {
                if (!res.ok) {
                    throw new Error("Failed to fetch");
                }
                const data = await res.json();
                setCoin(data);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false)

        }
    }
    useEffect(() => {
        fetchcrypto();
    }, []);

    if (loading) {
        return (
            <Container className="text-center mt-5">

                <Spinner animation="border" variant="info" className="" />
                <p className="text-light mt-2"> ... Loading</p>
            </Container>
        )
    }
    if (error) {
        return (

            <Alert variant="danger">

                {error}

                <div className="mt-3">

                    <Button onClick={fetchcrypto}>
                        Retry
                    </Button>

                </div>

            </Alert>

        )
    }
    const topGainers = [...coins]
        .sort(
            (a, b) =>
                b.price_change_percentage_24h - a.price_change_percentage_24h
        )
        .slice(0, 5);

    const topLosers = [...coins]
        .sort(
            (a, b) =>
                a.price_change_percentage_24h - b.price_change_percentage_24h
        )
        .slice(0, 5);
    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );
    return (

        <>
            <Container fluid  >
                <Row className="mb-4 mt-3">

                    {/* Top Gainers */}
                    <Col lg={6}>
                        <Card
                            style={{
                                background: "#0c1831",
                                border: "1px solid #2e3c5a",
                                borderRadius: "18px"
                            }} className="p-3 mt-1">
                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0 text-success">
                                    <FaArrowTrendUp /> Top Gainers
                                </h5>

                                <Button variant="link" className="text-info p-0">
                                    View All
                                </Button>
                            </div>

                            {topGainers.map((coin, index) => (
                                <div
                                    key={coin.id}
                                    className="d-flex justify-content-between text-light align-items-center py-2 border-bottom border-secondary"
                                >
                                    <div className="d-flex align-items-center gap-3">
                                        <span>{index + 1}</span>

                                        <Image
                                            src={coin.image}
                                            width={30}
                                            height={30}
                                        />

                                        <div>
                                            <div>{coin.name}</div>
                                            <small className="text-secondary">
                                                {coin.symbol.toUpperCase()}
                                            </small>
                                        </div>
                                    </div>

                                    <div className="text-end">
                                        <div>${coin.current_price.toLocaleString()}</div>

                                        <div className="text-success fw-bold">
                                            +{coin.price_change_percentage_24h.toFixed(2)}%
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Card>
                    </Col>

                    {/* Top Losers */}
                    <Col lg={6}>
                        <Card
                            style={{
                                background: "#0c1831",
                                border: "1px solid #2e3c5a",
                                borderRadius: "18px"
                            }} className="p-3 mt-1">

                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0 text-danger">
                                    <FaArrowDownLong /> Top Losers
                                </h5>

                                <Button variant="link" className="text-info p-0">
                                    View All
                                </Button>
                            </div>

                            {topLosers.map((coin, index) => (
                                <div
                                    key={coin.id}
                                    className="d-flex justify-content-between text-light align-items-center py-2 border-bottom border-secondary"
                                >
                                    <div className="d-flex align-items-center gap-3">

                                        <span>{index + 1}</span>

                                        <Image
                                            src={coin.image}
                                            width={30}
                                            height={30}
                                        />

                                        <div>
                                            <div>{coin.name}</div>

                                            <small className="text-secondary">
                                                {coin.symbol.toUpperCase()}
                                            </small>
                                        </div>
                                    </div>

                                    <div className="text-end">
                                        <div>${coin.current_price.toLocaleString()}</div>

                                        <div className="text-danger fw-bold">
                                            {coin.price_change_percentage_24h.toFixed(2)}%
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </Card>
                    </Col>


                    <Col lg={12} className="mt-3">
                        <Card
                            style={{
                                background: "#0c1831",
                                border: "1px solid #2e3c5a",
                                borderRadius: "18px"
                            }} className="p-3"
                        >

                            <Row>

                                <Col sm={4} lg={7}>
                                    <h3 className="fw-bold text-white mt-1">

                                        Live Crypto Market

                                    </h3>

                                </Col>
                                <Col sm={2} lg={3}>
                                    <Form.Control
                                        placeholder="Search cryptocurrency..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="search-input shadow-none bg-dark text-light mt-1"
                                        style={{ color: 'white' }}
                                    /> </Col>
                                <Col sm={2} lg={2}>
                                    <Button
                                        variant="outline-success"
                                        className="rounded-pill px-4 mt-1"
                                        onClick={fetchcrypto}
                                    >
                                        Refresh
                                    </Button>
                                </Col>
                            </Row>

                            <Table
                                responsive
                                hover
                                borderless
                                className="align-middle"
                            >
                                <thead>
                                    <tr className="align-middle">
                                        <th>#</th>
                                        <th>Coin</th>
                                        <th>Price</th>
                                        <th>24h Change</th>
                                        <th>7d Change</th>
                                        <th>Market Cap</th>
                                        <th>Volume(24h)</th>
                                        <th>Watch</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredCoins.map((coin, index) => (
                                        <tr key={coin.id}>
                                            <td>{index + 1}</td>
                                            <td>

                                                <div className="d-flex align-items-center gap-3">

                                                    <Image
                                                        src={coin.image}
                                                        alt={coin.name}
                                                        width="40"
                                                        height="40"
                                                    />

                                                    <div>
                                                        <h6 className=" mb-0 fw-semibold">{coin.name}</h6>

                                                        <small className="text-secondary text-uppercase">
                                                            {coin.symbol.toUpperCase()}
                                                        </small>
                                                    </div>

                                                </div>
                                            </td>

                                            <td className="fw-bold">${coin.current_price.toLocaleString()}</td>

                                            <td>
                                                <Badge
                                                    bg={
                                                        coin.price_change_percentage_24h >= 0
                                                            ?

                                                            "success"

                                                            :

                                                            "danger"
                                                    }
                                                >

                                                    {coin.price_change_percentage_24h.toFixed(2)}%

                                                </Badge>
                                            </td>
                                            <td>
                                                <span className={coin.price_change_percentage_24h >= 0 ? "text-success" : "text-danger"}>
                                                    <FaArrowTrendUp />
                                                </span>
                                            </td>
                                            <td>${coin.market_cap.toLocaleString()}</td>

                                            <td>${coin.total_volume.toLocaleString()}</td>
                                            <td >
                                                <Button variant="outline-warning" size="sm" className="rounded-circle">
                                                    <FaStar />
                                                </Button>
                                            </td>


                                        </tr>
                                    ))}
                                </tbody>

                            </Table>
                        </Card>
                    </Col>
                </Row>
            </Container >
        </>
    )

}

export default Headers