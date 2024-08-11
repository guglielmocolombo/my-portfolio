import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    return (
        <Container fluid className="mt-5">
            <Row className="justify-content-center mb-4">
                <Col md={8}>
                    <h2 className="text-center">👋 About Me</h2>
                    <Card>
                        <Card.Body>
                            <Card.Title>Hello! I'm Guglielmo Colombo</Card.Title>
                            <Card.Text>
                                I'm a <strong>25-year-old Software Engineer</strong> from Italy, born on <strong>August 26, 1998</strong>. My passion for <strong>software development</strong>, <strong>cloud technologies</strong>, and <strong>artificial intelligence</strong> fuels my professional journey. I thrive on tackling challenges and exploring innovations within these fields, always eager to expand my knowledge and skills. 🚀
                            </Card.Text>
                            <Card.Text>
                                Outside of work, I have a few passions that bring balance and joy to my life:
                                <ul>
                                    <li><strong>🍳 Cooking:</strong> I love exploring new recipes and flavors, which helps me unwind after a day of coding.</li>
                                    <li><strong>🚴‍♂️ Cycling:</strong> Staying active and connected with nature through cycling is one of my favorite activities.</li>
                                    <li><strong>🌍 Traveling:</strong> Traveling broadens my horizons, introducing me to new cultures and experiences that enrich my perspective.</li>
                                </ul>
                            </Card.Text>
                            <Card.Text>
                                Whether I'm solving complex software problems or crafting a new recipe, I approach every endeavor with enthusiasm and a desire to learn. Thank you for taking the time to get to know me! 😊
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
