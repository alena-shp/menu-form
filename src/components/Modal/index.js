import React from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'
import './index.scss'

import { ReactComponent as IconClose } from '../../assets/IconClose.svg'
const Modal = ({ children, title, isOpen, closeModal }) => {
  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isOpen}
      className="Modal"
      overlayClassName="Modal__overlay"
      onRequestClose={closeModal}
    >
      <header className="Modal__header">
        {title && <h2 className="Modal__title">{title}</h2>}
        <a href="#0" onClick={closeModal}>
          <IconClose />
        </a>
      </header>
      <div className="Modal__body">{children}</div>
    </ReactModal>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
}

Modal.defaultProps = {
  children: undefined,
  title: undefined
}

export default Modal
