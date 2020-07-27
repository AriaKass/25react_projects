import React from 'react'

function Search({onTextChange}) {
    return(
        <input type="text" onChange={(elem) => onTextChange(elem.target.value)}></input>
    )
}

export default Search;