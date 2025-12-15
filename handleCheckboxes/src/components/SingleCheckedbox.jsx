import React from 'react'

const SingleCheckedbox = () => {


    const [checked, setChecked] = useState(false);
    console.log(checked)
    const onchange = (e) => {
        setChecked(e.target.checked);
        console.log(e.target.checked);

    }


        return (
            <>
                <label htmlFor="cd">
                    <input id='cd' type="checkbox" checked={checked} onChange={onchange} />
                    Terms & conditions
                </label>
            </>
        )



    }

    export default SingleCheckedbox
