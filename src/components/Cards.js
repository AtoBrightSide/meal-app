import axios from 'axios';
import { useState, React, useEffect } from 'react';
import { Card } from 'react-bootstrap';

import './Cards.css';


function Cards(props) {
    const baseURL = `https://themealdb.com/api/json/v1/1/list.php?${props.letter}=list`;

    const [data, setdata] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setdata(response.data);
        })
    }, [baseURL]);

    if (data) {
        return (
            <div className='cards'>
                {data.meals.map(cat => {
                    return (
                        <div>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://picsum.photos/200/300" />
                                <Card.Body>
                                    <Card.Title>{props.letter === 'c' ? cat.strCategory : cat.strArea}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    );
                })}
            </div>
        )
    }
    return (
        <>
        </>
    );
}

export default Cards
