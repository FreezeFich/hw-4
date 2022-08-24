import React from 'react'
import {useState} from 'react'
import Data from '../Data/Data'
import './Search.scss'

const Search = (query, setQuery) => {
    
    return(
        <input type="text" placeholder='Search...' className='search' onChange={(e) => setQuery(e.target.value)}/>
    )
}

export default Search 