import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfessionalExperience = () => {
    return (
        <Container fluid className="mt-5">
            <Row className="justify-content-center mb-4">
                <Col md={8}>
                    <h2 className="text-center">💼 Professional Experience</h2>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>🚗 Software Engineer, Toyota Motor Europe – Brussels, BE</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                September 2023 – Present
                            </Card.Subtitle>
                            <Card.Text>
                                At Toyota Motor Europe, I lead the investigation and development of Java applications for the latest vehicle infotainment system:
                                <ul>
                                    <li><strong>🚀 Successfully released</strong> two multimedia applications on over 800,000 vehicles in Europe, enhancing in-car technology.</li>
                                    <li><strong>🔧 Established a new branching, testing strategy, and CI pipeline</strong> for multimedia applications development, reducing feature delivery time by 20% and significantly decreasing bug propagation.</li>
                                    <li><strong>⚙️ Optimized the Over-The-Air (OTA) workflow</strong>, redesigning the pipeline to cut deployment time by 80% and improving application usage traceability in production.</li>
                                    <li><strong>🌍 Pioneered and technically led Toyota's first globally implemented AI-based multimedia application prototype</strong>, integrating a Large Language Model, which passed business gateways and met user requirements.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>🔧 Embedded Software Engineer, Capgemini Engineering (@Atlas Copco) – Brussels, BE</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                September 2022 – August 2023
                            </Card.Subtitle>
                            <Card.Text>
                                At Capgemini Engineering, I worked as part of an agile team and led several key initiatives:
                                <ul>
                                    <li><strong>🤝 Collaborated in an agile team</strong> of 12 to maintain and enhance a substantial C++ codebase exceeding 20,000 lines, ensuring continuous improvement and functionality.</li>
                                    <li><strong>🔍 Led a three-person team</strong> in refactoring code for two air compressor controllers, enhancing code readability and achieving a 20-second reduction in execution cycle time, leading to improved system performance.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ProfessionalExperience;
