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

function Countries() {
    const baseURL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';

    const [areas, setareas] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setareas(response.data);
        })
    }, [baseURL]);
    if (areas) {
        return (
            <>
                <Container>
                    <Row md={3} sm={1}>
                        {areas.meals.map(area => {
                            return (
                                <>
                                    <Col>
                                        <Card style={{ width: '25rem', height: 'fit-content', margin: '15px', border: 'groove', background: (99,99,255) }}>
                                            {/* <Card.Img variant="top" src={area.strareaThumb} /> */}
                                            <Card.Body>
                                                <Card.Title><MyHeader>{area.strArea}</MyHeader></Card.Title>
                                                <Button path={'/filter/' + area.strArea + '&a'}>Check out {area.strArea} meals</Button>
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

export default Countries;