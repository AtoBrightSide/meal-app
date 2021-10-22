import React, { useEffect, useState } from 'react'
import { Button } from './Button'
import '../App.css';
import './Herosection.css';
import axios from 'axios';

import { Col, Row, Container, Card } from 'react-bootstrap';

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
            // console.log(response.data);
        })
    }, []);

    if (randomData && data) {
        const myStyle = {
            background: `url(${randomData.meals[0].strMealThumb}) center center/cover no-repeat`,
        };
        // console.log(`the random data ${data}`);
        return (
            <>
                <div className='hero-container' style={myStyle}>
                    <h1>FOOD AWAITS</h1>
                    <p>What are you waiting for?</p>
                    <div className="hero-btns">
                        <Button
                            className='btns'
                            buttonStyle='btn--outline'
                            buttonSize='btn--large'
                        >
                            GET STARTED
                        </Button>
                        <Button
                            className='btns'
                            buttonStyle='btn--primary'
                            buttonSize='btn--large'
                        >
                            WATCH TRAILER <i className="far fa-play-circle"></i>
                        </Button>
                    </div>
                </div>

                <Container>
                    <h1>{data.meals[0].strMeal[0]}</h1>
                    <Row md={3} sm={1}>
                        {data.meals.map(meal => {
                            return (
                                <>
                                    <Col>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={meal.strMealThumb} />
                                            <Card.Body>
                                                <Card.Title>{meal.strMeal}</Card.Title>
                                                <Card.Text>
                                                    {meal.strInstructions}
                                                </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
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
