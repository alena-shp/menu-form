import React from 'react'
import Modal from '../Modal'

const Header = () => {
  return (
    <div className="Header">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" href="#0">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#0">
            Contacts
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#0">
            Invite
          </a>
        </li>
      </ul>

      <Modal title="Modal title">*Modal body here*</Modal>
    </div>
  )
}

export default Header
