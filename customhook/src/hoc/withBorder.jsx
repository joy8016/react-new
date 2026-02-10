import React from 'react'

const withBorder = (Component) => {
    return (props) => {

        return (
            <div className='border-4 border-black p-10 rounded-3xl'>

                <Component {...props} />
            </div>
        )
    }
}

export default withBorder
