import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { submit } from './features/formSlice'

const Forms = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)

    const dispatch=useDispatch()
    return (
        <div>
            <div>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} /><br />
                <input type='text' value={age} onChange={(e) => setAge(e.target.value)} /><br /><br />

                <button onClick={()=>dispatch(submit({name,age}))}>Submit</button>

            </div>


        </div>
    )
}

export default Forms
