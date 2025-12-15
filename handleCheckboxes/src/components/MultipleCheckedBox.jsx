import { useState } from "react";

const MultipleCheckedBox = () => {
    const [isHtml, setishtml] = useState(false);
    const [css, setiscss] = useState(false);
    const [js, setisjs] = useState(false);
    console.log(isHtml)
    const onchange = (e) => {
        setishtml(e.target.checked);
        console.log(e.target.checked);

    }
    const Onchange = (e) => {
        setiscss(e.target.checked);
        console.log(e.target.checked);

    }
    const oNnchange = (e) => {
        setisjs(e.target.checked);
        console.log(e.target.checked);

    }

    // multiple checkdboxes
    return (
        <>
            <label htmlFor="html">
                <input id='html' type="checkbox" checked={isHtml} onChange={onchange} />
                html
            </label>
            <br /><br />
            <label htmlFor="css">
                <input id='css' type="checkbox" checked={css} onChange={Onchange} />
                js
            </label>
            <br /><br />
            <label htmlFor="js">
                <input id='js' type="checkbox" checked={js} onChange={oNnchange} />
                css
            </label>
            <br /><br />

            {isHtml && 'html is selected'}
            <br />
            {css && 'css is selected'}
            <br />
            {js && 'js is selected'}

        </>
    )

}