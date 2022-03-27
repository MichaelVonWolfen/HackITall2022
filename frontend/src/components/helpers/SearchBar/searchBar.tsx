import React, {useState} from 'react';
import "./searchBar.sass"
import config from "../../../config";

interface Viata{
    dataSetter:any
}
export default function SearchBar(props:Viata){
    const [companiesList, setCompaniesList] = useState([])
    const handleChange = (e:any) => {
        e.preventDefault()
        // @ts-ignore
        let val = document.getElementById("searchbar").value
        if(!val) return
        props.dataSetter(val.value)
    }
    const handleInput = (e:any) => {
        // @ts-ignore
        let val = document.getElementById("searchbar").value
        if(!val) return
        // console.log(val)
        if(val.length > 0){
            // @ts-ignore
            document.getElementById("searchItemsList").classList.remove("hidden")
            let dataList: JSX.Element[] = []
            config.companies.forEach(company =>{
                if(company.company.toLowerCase().includes(val.toLowerCase()) || company.stock_ID.toLowerCase().includes(val.toLowerCase())){
                    dataList.push(
                        <div className="searchItem" onClick={() =>{
                            props.dataSetter(company.stock_ID)
                            let itemList = document.getElementById("searchItemsList")
                            itemList && itemList.classList.add("hidden")
                            let searchbar = document.getElementById("searchbar")
                            // @ts-ignore
                            if(searchbar) searchbar.value = "";

                        }}>
                            <span className="searchItemBig">{company.company}</span>
                            <span className="searchItemSmall">{company.stock_ID}</span>
                        </div>
                    )
                }
            })
            // @ts-ignore
            setCompaniesList([...dataList])
        }
    }
    const handleKeyPress =(e:any) =>{
        console.log()
        setTimeout(()=>{
            let input = document.querySelector(".searchBarContainer #searchbar")
            let itemList = document.getElementById("searchItemsList")
                // @ts-ignore
            if(e.keyCode === 8 && input.value.length === 0){
                // @ts-ignore
                itemList.classList.add("hidden")
            }
        }, 200)
    }
    return(
        <form className={"searchBarContainer"} onSubmit={handleChange}>
            <input type="text" name="searchbar" id="searchbar" placeholder={"Search..."} onInput={handleInput} onKeyDown={handleKeyPress}/>
            <button type="submit">Search</button>
            <div className="searchItemsList hidden" id={"searchItemsList"}>
                {companiesList}
            </div>
        </form>
    )
}
