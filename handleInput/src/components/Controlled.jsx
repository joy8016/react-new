import React, { useState } from 'react'


const Controlled = () => {
    const [set, setState] = useState('');
    return (
        <div>





            <input value={set} className='border-2 rounded-lg p-1' type="text" placeholder='enter your name' onChange={(e) => {
                setState(e.target.value)
            }} />
            <br />
            <br />
            <button onClick={() => { setState('') }} className='bg-yellow-400'>clear</button>

            <p className='bg-red-600 m-2 rounded-2xl'>{set}</p>






        </div>
    )
}

export default Controlled
