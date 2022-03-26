import React, {useState} from 'react';
import "./searchBar.sass"

export default function SearchBar(){
    return(
        <div className={"searchBarContainer"}>
            <input type="text" name="searchbar" id="searchbar" placeholder={"Search..."}/>
            <button type="submit">Search</button>
        </div>
    )
}
