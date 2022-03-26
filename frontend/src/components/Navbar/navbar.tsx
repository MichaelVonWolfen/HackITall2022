import logo from "../../images/logo.svg"
import "./Navbar.sass"
import SearchBar from "../helpers/SearchBar/searchBar";
import HamburgerIcon from "../helpers/HamburgerIcon/HamburgerIcon";
import React from "react";
export default function Navbar(){
    const clickHandler = () =>{
        const navLinks:HTMLElement | null = document.getElementById("navLinks")
        if(navLinks === null) return
        navLinks.classList.toggle("active")
    }
    return(
        <nav className={"navbarContainer"}>
            <a href="/">
                <img src={logo} alt="Logo"/>
            </a>
            <SearchBar/>
            <HamburgerIcon clickHandlerPropagation={clickHandler}/>
            <div className="navLinks" id={"navLinks"}>
                <a href="/">Home</a>
                <a href="/charts">Predictions</a>
                <a href="/about">About</a>
            </div>
        </nav>
    )
}