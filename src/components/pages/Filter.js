import React, { useEffect, useState } from 'react'
import { Card, Row, Col, } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router';
import { Button } from '../Button';

function Filter() {
    const { key } = useParams();
    const value = (key[key.length - 1] === 'c') ? 'c' : 'a';
    var newkey = key.slice(0, key.length - 2);
    const baseURL = `https://www.themealdb.com/api/json/v1/1/filter.php?${value}=${newkey}`;

    const [filters, setfilters] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setfilters(response.data);
            console.log(response.data);
        })
    }, [baseURL]);
    if (filters) {
        return (
            <>
                <h1>{(value === 'a') ? newkey + " Meals" : "Meals with " + newkey}</h1>
                <Row md={2} sm={1}>
                    {filters.meals.map(filter => {
                        return (
                            <>
                                <Col>
                                    <Card style={{ width: '25rem', height: '30rem', margin: '15px' }}>
                                        <Card.Img variant="top" src={filter.strMealThumb} />
                                        <Card.Body>
                                            <Card.Title>{filter.strMeal}</Card.Title>
                                            <Card.Text>
                                                {/* {category.strCategoryDescription} */}
                                            </Card.Text>
                                            <Button path={'/meal/' + filter.idMeal}>Check out this meal</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </>
                        );
                    })}
                </Row>
            </>
        );
    }
    else {
        return (
            <>
            </>
        );
    }
}

export default Filter;