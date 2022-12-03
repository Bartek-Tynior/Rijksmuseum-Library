import React, { useState } from 'react'


function Modal({ imgSrc }) {

    const [modal, setModal] = useState(false);


    const toggleModal = () => {
        setModal(!modal);
    }

    if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }

  return (
    <>
        <button onClick={toggleModal} 
        className="btn_modal"
        >
            Show the image 
        </button>

        {modal && (
        <div onClick={toggleModal} className='modal'>
            <img className='image_modal' src={imgSrc} /> 
        </div>
        )}
    </>
  )
}

export default Modal