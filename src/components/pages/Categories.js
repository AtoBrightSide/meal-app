import React, { useEffect, useState } from 'react'
import { Card, Row, Col, } from 'react-bootstrap';
import axios from 'axios';
import { Button } from '../Button';
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
    transition: all .6s ease;
`;

function Categories() {
    const baseURL = 'https://www.themealdb.com/api/json/v1/1/categories.php';

    const [categories, setcategories] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setcategories(response.data);
        })
    }, [baseURL]);
    if (categories) {
        return (
            <>
                <Container>
                    <Row md={3} sm={1}>
                        {categories.categories.map(category => {
                            return (
                                <>
                                    <Col>
                                        <Card style={{ width: '25rem', height: 'fit-content', margin: '15px', border: 'groove', background: (23,33,66) }}>
                                            <Card.Img variant="top" src={category.strCategoryThumb} />
                                            <Card.Body>
                                                <Card.Title><MyHeader>{category.strCategory}</MyHeader></Card.Title>
                                                <Button path={'/filter/' + category.strCategory + '&c'}>Check out {category.strCategory} meals</Button>
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
    }
    else {
        return (
            <>
            </>
        );
    }
}

export default Categories;