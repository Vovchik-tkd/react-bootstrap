import React from 'react';
import { Carousel } from 'react-bootstrap';
import beach from '../beach.jpeg';

export default function Slider() {
    return (
        <Carousel>
            <Carousel.Item style = {{'height': '600px'}}>
                <img
                    className = "d-block w-100"
                    src = {beach}
                    alt = "First slide"
                />
                <Carousel.Caption>
                    <h3>Title</h3>
                    <p>Text</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style = {{'height': '600px'}}>
                <img
                    className = "d-block w-100"
                    src = {beach}
                    alt = "First slide"
                />
                <Carousel.Caption>
                    <h3>Web Developer</h3>
                    <p>Text</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style = {{'height': '600px'}}>
                <img
                    className = "d-block w-100"
                    src = {beach}
                    alt = "First slide"
                />
                <Carousel.Caption>
                    <h3>Web Developer</h3>
                    <p>Text</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}