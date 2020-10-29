import React from 'react';
import {Jumbotron as Jumbo, Container } from 'react-bootstrap';
import beach from '../beach.jpeg';
import styled from 'styled-components';

const Styles = styled.div`
    .jumbo {
        background: url(${beach}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 400px;
        position: relative;
        z-index: -2;
    }
    .overlay {
        background-color: black;
        opacity: 0.5;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

const Jumbotron = () => {
    return (
        <Styles>
            <Jumbo fluid className = "jumbo">
            <div className = "overlay"></div>
            <Container>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aperiam blanditiis consectetur neque unde sint! Fugit quos, sint dolore distinctio sequi mollitia incidunt vero, reiciendis aperiam, aliquid sunt rem ipsum.</p>
            </Container>
            </Jumbo>
        </Styles>
    )
}

export default Jumbotron;