import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Rui = () => {
    return (
      <Container className="mt-5">
        <Row>
          <Col>
            <div className="text-center">
              <h1 className="display-4">Happy Birthday, Rui!</h1>
              <p className="lead">Wishing you all the best on your special day.</p>
              <p>May your year be filled with success and happiness.</p>
              <p>Thank you for being such a great colleague in making slides!</p>
              <div className="decorative-element">🎉🎂🎈</div>
            </div>
          </Col>
        </Row>
      </Container>
      );
};

export default Rui;