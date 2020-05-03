import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {AlertContainer, Alert} from "react-bs-notifier";

import { actHideNotify} from './../actions/index';

function Notify()  {
    const dispatch = useDispatch()
    const handleDismiss = () => {
        dispatch(actHideNotify())
    }
    
    const  {style, title, content, isShow} = useSelector((state) => state.notify);	
    if(isShow === false) return null;

    return (
        <AlertContainer position="top-right" >
            <Alert headline={title} type={style} timeout={3000} onDismiss={handleDismiss}>
                {content}
            </Alert>
        </AlertContainer>
    );
}


export default Notify;

