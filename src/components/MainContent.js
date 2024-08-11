import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioProjects from './PortfolioProjects';
import Education from './Education';
import About from './About';
import ProfessionalExperience from './ProfessionalExperience';
const MainContent = () => {
  const [showContent, setShowContent] = useState(-1);

  const setContent = (index) => {

    if (showContent === index) {
      setShowContent(-1)
    } else {
      setShowContent(index)
    }

  }

  return (
    <>
      <Row onClick={() => setContent(0)}>
        <div className="grid-tile">
          <h3>About</h3>
        </div>
        {showContent === 0 ?
          <About/> : <></>}
      </Row>
      <Row onClick={() => setContent(1)}>
        <div className="grid-tile">
          <h3>Professional Experience</h3>
        </div>
        {showContent === 1 ?
          <ProfessionalExperience/> : <></>}
      </Row>
      <Row onClick={() => setContent(2)}>
        <div className="grid-tile">
          <h3>Projects</h3>
        </div>
        {showContent === 2 ?
          <PortfolioProjects /> : <></>}
      </Row>
      <Row onClick={() => setContent(3)}>
        <div className="grid-tile">
          <h3>Education</h3>
        </div>
        {showContent === 3 ?
          <Education/> : <></>}
      </Row>
    </>
  );
};

export default MainContent;

