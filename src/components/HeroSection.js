import React, { useEffect, useState } from 'react'
import { Button } from './Button'
import '../App.css';
import './Herosection.css';
import axios from 'axios';

function HeroSection() {
    const baseURL = 'https://www.themealdb.com/api/json/v1/1/random.php';

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setData(response.data);
        })
    }, [baseURL]);


    if (data) {
        const myStyle = {
            background: `url(${data.meals[0].strMealThumb}) center center/cover no-repeat`,
        };

        return (
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
        );
    } else {
        return (
            <></>
        );
    }
}

export default HeroSection
