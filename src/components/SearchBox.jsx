import React, { useState } from "react";
import axios from "axios";
import '../styles/searchBox.styles.css'

const SearchBox = ({setLocation}) => {

    const[search, setSearch] = useState("")

    const searchHandler = () =>{
        axios
            .get(`https://rickandmortyapi.com/api/location/${search}`)
            .then((res) => setLocation(res.data));
    };

    return(
        <div className="search-box-container">
            <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Type a location id" />
            <button onClick={searchHandler}>Search</button>
        </div>
    )
}

export default SearchBox;