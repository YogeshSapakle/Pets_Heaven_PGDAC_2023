import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const CardR = () => {
    return (
        <>
            <Row xs={1} md={3} className="g-4" style={{ padding: '5% 5%', backgroundImage: `url("https://garden.spoonflower.com/c/13024598/p/f/m/Tp3Q8mLxFCgbRU0Jbm8Pse_UIY7Uys5g5MOkTeKCI1BBej24oLMYHw_CKpJi/The%20minimalist%20dog%20paws%20sweet%20pet%20lovers%20boho%20style%20paw%20design%20in%20white%20on%20moody%20blue.jpg")`, backgroundRepeat: "repeat", backgroundSize: "contain", backgroundPosition: 'center' }}>
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col>
                        <Card className='bg-gradient bg-light shadow'>
                            <Card.Body>
                                <Card.Title>Complaint title</Card.Title>
                                <Card.Text>
                                    Complaint Body
                                </Card.Text>
                                <Card.Text>
                                    <Card.Link href="#" ><Button variant="primary">Update</Button></Card.Link>
                                </Card.Text>
                                <Card.Text>
                                    <Card.Link href="#"><Button variant="primary">Delete</Button></Card.Link>
                                </Card.Text>
                                <Card.Text>
                                    <Card.Link href="#"><Button variant="primary">Another Link</Button></Card.Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default CardR;