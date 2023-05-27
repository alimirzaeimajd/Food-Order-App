import React from 'react'
import ReactDOM from 'react-dom'

const Backdrop = props => {
    return <div className='backdrop' />
}

const ModalOverlay = props => {
    return (
        <div className='modal'>
            <div className='content'>{props.children}</div>
        </div>
    )
}

const portal = document.getElementById('overlay');

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop />, portal)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portal)}
        </>
    )
}

export default Modal