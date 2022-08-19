import React from "react";
import './filter.css'

const Filter=({count,character,setCharacter,setCount}:{count:string,character:string,setCharacter:any,setCount:any})=>{
    return (
        <form className="filter-container">
            <div className="input-container"><input placeholder="Search character" type="text" defaultValue={character} onChange={(e)=>setCharacter(e.target.value)}/></div>
            <select defaultValue={count} onChange={(e)=>setCount(e.target.value)}>
                <option value='1' >1</option>
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='15'>15</option>
                <option value='20'>20</option>
                <option value='25'>25</option>
                <option value='30'>30</option>
                <option value='30'>50</option>
            </select>
        </form>
    )
}

export default Filter