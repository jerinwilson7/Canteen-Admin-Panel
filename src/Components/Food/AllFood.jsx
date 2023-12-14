import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { server } from '../../server';

function AllFood() {
    const [foodList, setFoodList] = useState([]);

    useEffect(() => {
        fetchFoods();
    }, []);

    const fetchFoods = async () => {
        try {
            const response = await axios.get(`${server}/admin/get-all-products`);
            setFoodList(response.data); // Assuming the response contains an array of food items
        } catch (error) {
            console.error('Error fetching foods:', error);
        }
    };

    return (
        <div>
            <h1>All Foods</h1>
            {foodList.length > 0 ? (
                <ul>
                    {foodList.map((food) => (
                        <li key={food.id}>{food.name}</li>
                        // Assuming 'name' is one of the properties of each food item
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default AllFood;
