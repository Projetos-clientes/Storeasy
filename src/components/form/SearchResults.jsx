import React from 'react'

const SearchResults = ({ data }) => {
    if (!data || !data.length) return null;
    console.log(data)
    const resultList = data.map(({ id, categoria }) => {
        return (
            <li key={id}>
                <span>{categoria}</span>
            </li>
        )
    })
    return (
        <div className='search-results'>
            <ul>
                {resultList}
            </ul>
        </div>
    )
}

export default SearchResults;