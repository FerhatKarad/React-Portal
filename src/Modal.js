import React from 'react'
import ReactDOM  from 'react-dom'

const MODAL_SYTLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  height: "300px",
  zIndex: 3,
  background: "#fff",
  padding: "10px",
}

const OVERLAY_STYlES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0, .7)',
    zIndex: 1000
}

export default function Modal({open , children, close}) {
    if (!open)
    return null

  return ReactDOM.createPortal (
      <div style={OVERLAY_STYlES}>
    <div style={MODAL_SYTLES}>
        <button className='MODAL_CLOSE' onClick={close}>Close Modal</button>
        {children}
    </div>
    </div>,
    document.getElementById('portal')
  )
}
