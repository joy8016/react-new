import React from 'react'

const withCardLook = (WrappedComponent) => {
    return () => {
        return (
            <div className='bg-red-700 rounded-2xl p-10 text-white'>
                <WrappedComponent />
            </div>
        )
    }

}

export default withCardLook
