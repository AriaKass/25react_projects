import React from 'react'

function Artist({mylist}) {
    return (
        <ul>
            {mylist.map((elem, nb) => <li key={"elemnb" + nb}>{elem}</li>)}
        </ul>
    )
}

export default Artist;