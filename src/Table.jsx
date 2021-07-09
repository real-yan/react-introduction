import React from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}

const TableBody = ({ characterData, removeCharacter }) => {
    const rows = characterData.map((row, index) => {   
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => removeCharacter(index)}>Delete</button>
                </td>
            </tr> 
        )
    }) 
    
    return <tbody>{rows}</tbody>
}

const Table = ({characterData, removeCharacter}) => {
    return (
        <table>
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
    )
}

export default Table