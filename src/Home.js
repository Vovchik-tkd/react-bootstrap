import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Jumbotron from './Components/Jumbotron';
import Slider from './Components/Slider';
import beach from './beach.jpeg';

export const Home = () => {
    return (
        <>
            <Slider/>
            <Container style = {{'padding-top': '2rem', 'padding-bottom': '2rem'}}>
                <Row>
                    <Col>
                        <Card style = {{'width': '18rem'}}>
                            <Card.Img variant = "top" src = {beach}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae excepturi aperiam eveniet mollitia asperiores, optio quam ipsa amet cumque corporis molestiae illo labore ex debitis cupiditate nulla, recusandae sint magni?</Card.Text>
                                <Button variant = "primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style = {{'width': '18rem'}}>
                            <Card.Img variant = "top" src = {beach}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae excepturi aperiam eveniet mollitia asperiores, optio quam ipsa amet cumque corporis molestiae illo labore ex debitis cupiditate nulla, recusandae sint magni?</Card.Text>
                                <Button variant = "primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style = {{'width': '18rem'}}>
                            <Card.Img variant = "top" src = {beach}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae excepturi aperiam eveniet mollitia asperiores, optio quam ipsa amet cumque corporis molestiae illo labore ex debitis cupiditate nulla, recusandae sint magni?</Card.Text>
                                <Button variant = "primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Jumbotron/>
            <Container style = {{marginBottom: '30px'}}>
                <Row>
                    <Col md = {7}>
                        <img src = {beach} height = {350} alt = "beach"/>
                    </Col>
                    <Col md = {5}>
                        <h2>Title</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae excepturi aperiam eveniet mollitia asperiores, optio quam ipsa amet cumque corporis molestiae illo labore ex debitis cupiditate nulla, recusandae sint magni?</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
};