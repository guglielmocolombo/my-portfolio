import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Education = () => {
    return (
        <Container fluid className="mt-5">
            <Row className="justify-content-center mb-4">
                <Col md={8}>
                    <h2 className="text-center">📚 Education Background 🎓</h2>
                    <p className="text-center">
                        Here is a summary of my educational achievements, showcasing my expertise in Computer Engineering with a focus on Artificial Intelligence and Data Analytics.
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={6} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>🎓 Laurea Magistrale (Master’s Degree) in Computer Engineering</Card.Title>
                            <Card.Text>
                                <strong>Institution:</strong> Politecnico di Torino<br />
                                <strong>Duration:</strong> 2020 - 2022<br />
                                <strong>Specialization:</strong> Artificial Intelligence and Data Analytics<br />
                                <strong>Grade:</strong> 110/110 cum Laude 🏆<br />
                            </Card.Text>
                            <Card.Text>
                                <strong>Erasmus Exchange Program:</strong><br />
                                <strong>Institution:</strong> UCLouvain - Université catholique de Louvain<br />
                                <strong>Duration:</strong> September 2021 - September 2022<br />
                                <strong>Credits:</strong> 30 CFU courses + 30 CFU thesis preparation<br />
                                <strong>Thesis Title:</strong> EEG Analysis for Parkinson Disease Detection 🧠
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>🎓 Laurea Triennale (Bachelor’s Degree) in Computer Engineering</Card.Title>
                            <Card.Text>
                                <strong>Institution:</strong> Politecnico di Torino<br />
                                <strong>Duration:</strong> 2017 - 2020<br />
                                <strong>Grade:</strong> 107/110 📜
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Education;
