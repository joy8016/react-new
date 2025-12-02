import React from 'react'

const Switch = () => {
    const option = 'b';
    switch (option) {
        case 'a':
            return <h1><ComponentA /></h1>
        case 'b':
            return <ComponentB />
        case 'c':
            return <ComponentC />
        default:
            return <h1>otherwise this is default case</h1>

    }
}

export default Switch
