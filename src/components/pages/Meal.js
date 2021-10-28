import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
// import styled from 'styled-components';
import { Container, Col, Row, Image } from 'react-bootstrap';



function Meal() {
    const { id } = useParams();
    const baseURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    const [meal, setmeal] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setmeal(response.data);
        })
    }, [baseURL]);
    // meal.meals[0].strMealThumb
    if (meal) {
        return (
            <>
                <Container>
                    <Row>
                        <Col xs={12} md={6} >
                            <Image src={meal.meals[0].strMealThumb} rounded fluid />
                        </Col>
                        <Col xs={12} md={6}>
                            <Row>
                                <Col>Category</Col>
                                <Col>Area</Col>
                                <Col>Recommended to drink</Col>
                            </Row>
                            <Row>
                                <Col>{meal.meals[0].strCategory}</Col>
                                <Col>{meal.meals[0].strArea}</Col>
                                <Col>{(meal.meals[0].strDrinkAlternate) ? meal.meals[0].strDrinkAlternate : "Just Get Drunk"}</Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    } else {
        return (
            <>
            </>
        );
    }
}

export default Meal

