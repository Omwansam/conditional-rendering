import React from 'react'

const Greetings = ({Morning}) => {
return (
    <div>
        {Morning ? <h1>Good Morning!</h1> : <h1>Good Evening!</h1>}
    </div>
)
}

export default Greetings;