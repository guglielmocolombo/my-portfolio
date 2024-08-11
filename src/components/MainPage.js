import React from 'react';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FallingSand from './FallingSand';
import MainContent from './MainContent';

const MainPage = () => {

    console.log(window.screen.width)
    const containerStyle = {
        width: '950px',   // Set the width
        height: '150px',  // Set the height
        margin: '50px auto',  // Center the container horizontally and add margin from top
    };

    return (
        <>
            <Row>
                <Container style={containerStyle}>
                    <FallingSand></FallingSand>
                </Container>
            </Row>
            <Row>
                <Container style={containerStyle}>
                    <MainContent></MainContent>
                </Container>
            </Row>
        </>
    );
}

export default MainPage;
