import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContentInformation from './ContentInformation';

const MainContent = () => {
  const [showAboutContent, setShowAboutContent] = useState(false);
  const backgroundImage = 'images/background1.jpeg';

  return (
    <Container
      fluid
      className="main-content"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
     
      <div className="content">
        <h1 className="main-title">Let Me Cook</h1>
        <h2 className="subtitle">Guglielmo Colombo - Software Engineer</h2>
        
        <Row className="grid-row">
          <Col onClick={() => setShowAboutContent(!showAboutContent)}>
            <div className="grid-tile">
              <h3>About</h3>
            </div>
            {showAboutContent ? 
            <ContentInformation inputFile={"about.txt"}/> : <></>}
          </Col>
          <Col>
            <div className="grid-tile">
              <h3>Education</h3>
            </div>
          </Col>
          <Col>
            <div className="grid-tile">
              <h3>Professional Experience</h3>
            </div>
          </Col>
          <Col>
            <div className="grid-tile">
              <h3>Projects</h3>
            </div>
          </Col>
        </Row>
        
      </div>
    </Container>
  );
};

export default MainContent;

