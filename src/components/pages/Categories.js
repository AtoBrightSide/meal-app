import React, { useEffect, useState } from 'react'
import { Card, Row, Col, } from 'react-bootstrap';
import axios from 'axios';

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
                <Row md={3} sm={1}>
                    {categories.categories.map(category => {
                        return (
                            <>
                                <Col>
                                    <Card style={{ width: '25rem', height: '30rem', margin: '15px' }}>
                                        <Card.Img variant="top" src={category.strCategoryThumb} />
                                        <Card.Body>
                                            <Card.Title>{category.strCategory}</Card.Title>
                                            <Card.Text>
                                                {category.strCategoryDescription}
                                            </Card.Text>
                                            {/* <Button path={'/meal/' + meal.idMeal}>Check out this meal</Button> */}
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

export default Categories;