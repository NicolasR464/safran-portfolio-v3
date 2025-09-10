'use client'

import { useState } from 'react'

export const Test = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>Hello World</h1>
            <button onClick={handleClick}>Click me</button>
            <p>Count: {count}</p>
        </div>
    )
}
