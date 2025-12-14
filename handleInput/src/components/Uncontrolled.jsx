import React from 'react'

const Uncontrolled = () => {
    const input = useRef(null);

    let got = () => {
        console.log(input.current.value)



    }
    return (
        <div>

            return(
            <>
                <input ref={input} className='border-2 rounded-2xl p-2' type="text" placeholder='enter name' />
                <br />
                <br />
                <button onClick={got}>submit</button>


            </>
            )

        </div>
    )
}

export default Uncontrolled
