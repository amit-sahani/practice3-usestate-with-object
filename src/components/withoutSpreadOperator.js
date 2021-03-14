import React, {useState} from 'react'

const WithoutSpreadOperator = () => {
    const [name, setName] = useState({firstname:"", lastname:""})

    return (
        <div>
            <div>{`Firstname: ${name.firstname} and Lastname: ${name.lastname}`}</div>
            <input type="text" value={name.firstname} onChange={(e)=>setName({firstname:e.target.value})} />
            <input type="text" value={name.lastname} onChange={(e)=>setName({lastname:e.target.value})} />
        </div>
    )
}

export default WithoutSpreadOperator
