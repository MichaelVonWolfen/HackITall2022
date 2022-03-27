import React, {useState} from 'react';
import "./searchBar.sass"
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";

interface PLM{
    dataSetter:any
}
export default function SearchBar(props:PLM){
    const handleChange = (e:any) => {
        e.preventDefault()
        let val = document.getElementById("searchbar")
        if(!val) return
        // @ts-ignore
        props.dataSetter(val.value)
    }
    return(
        <form className={"searchBarContainer"} onSubmit={handleChange}>
            <input type="text" name="searchbar" id="searchbar" placeholder={"Search..."}/>
            <button type="submit">Search</button>
        </form>
    )
}
