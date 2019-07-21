import React from 'react'

export default function TodoList(props) {
    return (
        <ul>
            {props.items.map((item, idx) =>
                (
                    <li key={idx}>
                        <input type="checkbox" checked={item.checked} />
                        {item.itemName}
                    </li>
                ))}
        </ul>
    )
}