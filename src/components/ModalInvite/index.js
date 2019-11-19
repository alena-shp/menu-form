import React from 'react'
import Modal from '../Modal'
import './index.scss'
import { ReactComponent as ArrowDown } from '../../assets/ArrowDown.svg'

const ModalInvite = () => (
  <Modal isOpen title="Invite people to project">
    <div className="ModalInvite">
      <span className="ModalInvite__link">
        Or share this Project with Public link
      </span>
      <div className="ModalInvite__action">
        <div className="ButtonSelect">
          <span className="ButtonSelect__arrow">
            <ArrowDown />
          </span>
          <select size="1">
            <option>Can edit</option>
            <option>Can edit</option>
            <option>Can edit</option>
          </select>
        </div>
        <button>Copy link</button>
      </div>
    </div>
  </Modal>
)

export default ModalInvite
