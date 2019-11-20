import React from 'react'
import Modal from '../Modal'
import './index.scss'
import { ReactComponent as Search } from '../../assets/Search.svg'
import ButtonSelect from '../ButtonSelect'
import Button from '../Button'

const ModalInvite = () => (
  <Modal isOpen title="Invite people to project">
    <form className="ModalSearch">
      <a href="0#" className="ModalSearch__icon">
        <Search />
      </a>
      <input
        type="text"
        className="ModalSearch__input"
        placeholder="Name or email"
      />
      <ButtonSelect />
      <Button />
    </form>
    <div className="Invitation">
      {[1, 2, 3, 4, 5].map((component, index) => (
        <div className="Invitation__block" key={index}>
          <div className="Invitation__block-photo">
            <img src="https://picsum.photos/30/30" alt="" />
          </div>
          <div className="Invitation__block-information">
            <p>Name</p>
            <a href="0#">hello@milangladis.com</a>
          </div>
          <p className="Invitation__block-activity">Spent 3h 34mins</p>
          <button>Transfer ownership</button>
        </div>
      ))}
    </div>

    <div className="ModalFooter">
      <span className="ModalFooter__link">
        Or share this Project with Public link
      </span>
      <div className="ModalFooter__action">
        <ButtonSelect />
        <button>Copy link</button>
      </div>
    </div>
  </Modal>
)

export default ModalInvite
