import React, {useState} from 'react'

const SpreadOperator = () => {
    const [name, setName] = useState({firstname:"", lastname:""})

    const setFirstName = (e) =>{
        setName({...name, firstname:e.target.value})
    }
    const setLastName = (e) =>{
        setName({...name, lastname:e.target.value})
    }

    return (
        <div>
            <div>{`Firstname: ${name.firstname} and Lastname: ${name.lastname}`}</div>
            <input type="text" value={name.firstname} onChange={setFirstName} />
            <input type="text" value={name.lastname} onChange={setLastName} />
        </div>
    )
}

export default SpreadOperator
