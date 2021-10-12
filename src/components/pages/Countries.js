import '../../App.css';
import axios from 'axios';
import { useState, React, useEffect } from 'react';

const baseURL = 'https://themealdb.com/api/json/v1/1/list.php?a=list';

export default function Countries() {
    const [countries, setCountries] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setCountries(response.data);
        })
    }, []);
    if (countries) {
        return (
            <div>
                <h1 className="Countries">Countries</h1>
                {countries.meals.map(cat => {
                    return <h1>{cat.strArea}</h1>
                })}
            </div>
        );
    }

    return (
        <>
        </>
    );
}