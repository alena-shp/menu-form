import React, { useState } from 'react'
import classNames from 'classnames'
import ModalInvite from '../ModalInvite'
import './index.scss'

const Header = () => {
  const [isModalInviteOpen, showModal] = useState(false)
  const [showNav, toggleNav] = useState(false)

  const closeInviteModal = () => {
    showModal(false)
  }

  const openInviteModal = () => {
    showModal(true)
  }

  const onToggleNav = () => {
    toggleNav(!showNav)
  }

  return (
    <div className="Header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" onClick={onToggleNav}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={classNames('Header__nav', {
            'Header__nav--expanded': showNav
          })}
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="0#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="0#" onClick={openInviteModal}>
                Invite
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="0#">
                Сontacts
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <ModalInvite isOpen={isModalInviteOpen} closeModal={closeInviteModal} />
    </div>
  )
}

export default Header
