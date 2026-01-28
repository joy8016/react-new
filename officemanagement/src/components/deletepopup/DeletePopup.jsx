import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeDeletePopup } from '../../features/popup/popupSlice';

const DeletePopup = () => {
    const state = useSelector(state => state.popup.deletePopup);
    console.log(state);
    if (!state) return null;

    const dispatch = useDispatch();
    const close=()=>{
        dispatch(closeDeletePopup());
    }
    return (
        <div className='fixed top-0 left-0 z-20 bg-black/80 h-full w-full items-center flex justify-center '>
            <div className="card w-96 bg-base-100 card-sm shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">Delete</h2>
                    <p>Are You Sure!</p>
                    <div  className="justify-end card-actions">
                        <button onClick={close} className="btn btn-primary">NO</button>
                        <button className="btn btn-primary">YES</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DeletePopup
