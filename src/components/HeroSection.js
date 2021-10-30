import React, { useEffect, useState } from 'react'
import { Button } from './Button'
import '../App.css';
import './Herosection.css';
import axios from 'axios';

import { Col, Row, Card } from 'react-bootstrap';
import styled from 'styled-components';

const Container = styled.div`
    background: ${props => props.theme.backgroundColor};
    align-items: center;
    justify-content: center;
    transition: all .6s ease;
    height: fit-content;
`;

const MyHeader = styled.div`
    color: ${props => props.theme.titleColor};
    align-items: center;
    transition: all .6s ease;
`;

const TheHeader = styled.h4`
    color: ${props => props.theme.titleColor};
    transition: all .6s ease;
`;


function HeroSection() {
    const baseURL = 'https://www.themealdb.com/api/json/v1/1/random.php';

    const [randomData, setrandomData] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setrandomData(response.data);
        })
    }, [baseURL]);

    const letters = "a b c d e f g h i j k l m n o p r s t v w y".split(" ");
    const randomLetter = Math.floor(Math.random() * letters.length);
    const baseURL_2 = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letters[randomLetter]}`;

    const [data, setdata] = useState(null);

    useEffect(() => {
        axios.get(baseURL_2).then((response) => {
            setdata(response.data);
        })
    }, []);

    if (randomData && data) {
        const myStyle = {
            background: `url(${randomData.meals[0].strMealThumb}) center center/cover no-repeat`,
        };
        return (
            <>
                <div className='hero-container' style={myStyle}>
                    <h1>FOOD AWAITS</h1>
                    <p>What are you waiting for?</p>
                    <div className="hero-btns">
                        <Button
                            className='btns'
                            buttonStyle='btn--primary'
                            buttonSize='btn--large'
                            path={'/meal/' + randomData.meals[0].idMeal}
                        >
                            GET STARTED
                        </Button>
                    </div>
                </div>

                <Container>
                    <TheHeader>{data.meals[0].strMeal[0]}</TheHeader>
                    <Row md={3} sm={1}>
                        {data.meals.map(meal => {
                            return (
                                <>
                                    <Col>
                                        <Card style={{ width: '25rem', height: '30rem', margin: '10px', backgroundColor: 'inherit' }}>
                                            <Card.Img variant="top" src={meal.strMealThumb} />
                                            <Card.Body>
                                                <Card.Title><MyHeader>{meal.strMeal}</MyHeader></Card.Title>
                                                <Button path={'/meal/' + meal.idMeal}>Check out this meal</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </>
                            );
                        })}
                    </Row>
                </Container>
            </>
        );
    } else {
        return (
            <>
                <h1>Network problem</h1>
            </>
        );
    }
}

export default HeroSection
