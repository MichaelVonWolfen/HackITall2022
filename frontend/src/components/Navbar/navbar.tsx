import logo from "../../images/logo.svg"
import "./Navbar.sass"
import SearchBar from "../helpers/SearchBar/searchBar";
export default function Navbar(){
    return(
        <nav className={"navbarContainer"}>
            <a href="/">
                <img src={logo} alt="Logo"/>
            </a>
            <SearchBar/>
        </nav>
    )
}