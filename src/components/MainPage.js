import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FallingSand from './FallingSand';

const MainPage = () => {
    const containerStyle = {
        width: '1000px',   // Set the width
        height: '150px',  // Set the height
        color: 'white',   // White text color for contrast
        position: 'absolute',
        top: '50px',
        left: '50%',
        transform: 'translateX(-50%)',
        justifyContent: 'center',
    };

    return (
        <Container style={containerStyle}>
            <FallingSand></FallingSand>
        </Container>
    );
}

export default MainPage;
