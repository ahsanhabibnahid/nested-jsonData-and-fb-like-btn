import React, { useEffect, useState } from 'react';

const SearchMeal = () => {
    const [search, setSearch] = useState('')
    const [meal, setMeal] = useState([])
    const handleChange = events => {
        setSearch(events.target.value)
    }

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => setMeal(data.meals))
    }, [search])
    return (
        <div>
            <h1>Search your Meal </h1>
            <input onChange={handleChange} type="text" placeholder='search food...' />
            <p>Searching value : {search}</p>
            <p>Found meal : {meal?.length || 0}</p>
            <ul>
                {
                    meal?.map(meal => <li>{meal.strMeal}</li>)
                }
            </ul>
        </div>
    );
};

export default SearchMeal;