import '../../App.css';
import axios from 'axios';
import { useState, React, useEffect } from 'react';

const baseURL = 'https://themealdb.com/api/json/v1/1/list.php?c=list';

export default function Categories() {
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setCategories(response.data);
            // console.log(response.data.meals);
        })
    }, []);
    if (categories) {
        return (
            <div>
                <h1 className="categories">Categories</h1>
                {categories.meals.map(cat => {
                    return <h1>{cat.strCategory}</h1>
                })}
            </div>
        );
    }

    return (
        <>
        </>
    );
}