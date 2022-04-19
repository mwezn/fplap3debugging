import React, { useState } from 'react';

function SearchForm({ getResult }) {

    const [ location, setLocation ] = useState({ location: null})

    const handleSubmit = e => {
        e.preventDefault()
        getResult(location);
    }

    const updateInput = e => {
        const input = e.target.value 
        let n={location:input}
        console.log(input)
        setLocation(old=>{return {...old, ...n}})
    }


    return (
        <form onSubmit={()=>handleSubmit()}>
            <input type="text" onChange={(e)=>updateInput(e)} />
            <input type="submit" value="Search" />
        </form>
    );
};

export default SearchForm;
