import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { Col, Row, Image } from 'react-bootstrap';

const Headers = styled.h4`
    font-weight: 200;
    color: ${props => props.theme.titleColor};
    transition: all .6s ease;
`;

const Container = styled.div`
    background: ${props => props.theme.backgroundColor};
    align-items: center;
    justify-content: center;
    transition: all .6s ease;
    height: fit-content;
`;

const TheText = styled.div`
    color: ${props => props.theme.textColor};
`;

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
        var ings = [];
        for (var property in meal.meals[0]) {
            if (property.includes("strIngredient") && (meal.meals[0][property] != null)) {
                ings = ings.concat(meal.meals[0][property] + ", ");
            }
        };
        return (
            <>
                <Container>
                    <Row>
                        <Col xs={12} md={6} >
                            <Row>
                                <Headers>The {meal.meals[0].strMeal}</Headers>
                            </Row>
                            <Image src={meal.meals[0].strMealThumb} rounded fluid />
                        </Col>
                        <Col xs={12} md={6} style={{ background: 'rgba(255, 255, 255,0.01)' }}>
                            <Row ml={5}>
                                <Col><Headers>Category</Headers></Col>
                                <Col><Headers>Area</Headers></Col>
                                <Col><Headers>Drink</Headers></Col>
                            </Row>
                            <Row ml={5} mt={5}>
                                <Col><TheText>{meal.meals[0].strCategory}</TheText></Col>
                                <Col><TheText>{meal.meals[0].strArea}</TheText></Col>
                                <Col><TheText>{(meal.meals[0].strDrinkAlternate) ? meal.meals[0].strDrinkAlternate : "Just Get Drunk"}</TheText></Col>
                            </Row>
                            <Row ml={5} mt={5}>
                                <Col md={12}><Headers>Ingredients</Headers></Col>
                                <Col><TheText>{ings}</TheText></Col>
                            </Row>
                            <Row mt={5}>
                                <Col md={12}><Headers>Instructions</Headers></Col>
                                <Col><TheText>{meal.meals[0].strInstructions}</TheText></Col>
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

