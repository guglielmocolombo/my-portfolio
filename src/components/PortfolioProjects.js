import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PortfolioProjects = () => {
    return (
        <Container fluid className="mt-4">
            <Row className="justify-content-center mb-3">
                <Col md={8}>
                    <p className="text-center">
                    Here are two of my recent projects that are closely linked, showcasing my work with frontend and backend technologies, mobile development, and cloud integration. 🚴‍♂️ To track and improve the performance of my daily bike commute to the office, I developed these two interconnected apps. They help me monitor my rides and analyze the data, making each trip more efficient and enjoyable!
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-center">
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>1. GPX Track Analysis React Application</Card.Title>
                            <Card.Text>
                                This React application analyzes GPX tracks recorded during my daily commute. It provides detailed insights into speed, position, and time, allowing users to visualize their journey data interactively. The app connects to AWS to fetch GPX files uploaded via the linked Android application.
                            </Card.Text>
                            <Card.Text>
                                <strong>Technical Details:</strong>
                                <ul>
                                    <li><strong>Frontend:</strong> React, Bootstrap, Leaflet.js for map rendering.</li>
                                    <li><strong>Backend:</strong> AWS Lambda functions to process GPX data.</li>
                                    <li><strong>Storage:</strong> AWS DynamoDB for storing GPX files, CouchDB for local testing</li>
                                    <li><strong>Data Handling:</strong> Axios for API requests.</li>
                                </ul>
                            </Card.Text>
                            <Button 
                                variant="primary" 
                                href="https://github.com/guglielmocolombo/bike-trip-app" 
                                target="_blank"
                            >
                                View on GitHub
                            </Button>
                        </Card.Body>
                    </Card>
                </Row>
                <Row>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>2. GPX Track Recording Android App</Card.Title>
                            <Card.Text>
                                This Android app, built with Java/Kotlin, records GPS data during my commute and generates a GPX file. At the end of the trip, the app automatically uploads the GPX file to AWS, where it can be accessed and analyzed by the React application.
                            </Card.Text>
                            <Card.Text>
                                <strong>Technical Details:</strong>
                                <ul>
                                    <li><strong>Languages:</strong> Java, Kotlin.</li>
                                    <li><strong>GPS Handling:</strong> Android Location API for accurate tracking, even with app running in background. The latitude and longitude are processed, together with the timestap, to compute the speed and add it to the gpx track</li>
                                    <li><strong>Cloud Integration:</strong> AWS DynamoDB for GPX track uploads.</li>
                                </ul>
                            </Card.Text>
                            <Button 
                                variant="primary" 
                                href="https://github.com/guglielmocolombo/bike-recording-android" 
                                target="_blank"
                            >
                                View on GitHub
                            </Button>
                        </Card.Body>
                    </Card>
            </Row>
            <Row className="justify-content-center">
                <Col md={8} className="text-center">
                    <p>These projects are closely linked, showcasing a seamless flow from mobile data collection to web-based data analysis, all powered by cloud integration.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default PortfolioProjects;
