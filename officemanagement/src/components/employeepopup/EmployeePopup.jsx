import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeEmployeePopup } from '../../features/popup/popupSlice';

const EmployeePopup = () => {
    const [formdetails, setFormdetails] = useState({
        profileurl: "",
        name: '',
        email: "",
        bio: '',
        highlight: false,
    })
    console.log(formdetails);
    const popup = useSelector(state => state.popup.employeePopup);
    // console.log(popup);
    if (!popup) return null;
    const dispatch = useDispatch();

    const close = () => {
        dispatch(closeEmployeePopup());


    }

    

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormdetails({
            ...formdetails,
            [name]: value
        })

    }


    return (
        <div onClick={close} className='fixed top-0 left-0 z-20 bg-black/80 h-full w-full items-center flex justify-center '>
            <fieldset onClick={(e) => { e.stopPropagation() }} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend pt-5">Employee Details</legend>

                <label className="label">Profile Url</label>
                <input name='profileurl' onChange={handleInput} type="text" className="input" placeholder="URL" />

                <label className="label">Email</label>
                <input name='email' onChange={handleInput}  type="email" className="input" placeholder="Email" />

                <label className="label ">Name</label>
                <input name='name' onChange={handleInput}  type="text" className="input" placeholder="Name" />

                <label className="label text-black/60">Bio</label>
                <textarea name='bio' onChange={handleInput}  className="textarea" placeholder="Bio"></textarea>

                <button className="btn btn-neutral mt-4">submit</button>
            </fieldset>

        </div>
    )
}

export default EmployeePopup
