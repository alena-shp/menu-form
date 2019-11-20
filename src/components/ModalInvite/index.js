import React from 'react'
import Modal from '../Modal'
import './index.scss'
import { ReactComponent as Search } from '../../assets/Search.svg'
import ButtonSelect from '../ButtonSelect'
import Button from '../Button'
import Invitation from './Invitation'

const ModalInvite = props => (
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
      <Button typePrimary>Invite 1 person</Button>
    </form>
   
   <Invitation />

    <div className="ModalFooter">
      <span className="ModalFooter__link">
        Or share this Project with Public link
      </span>
      <div className="ModalFooter__action">
        <ButtonSelect />
        <Button className="ModalFooter__action-button" typePrimary>
          Copy link
        </Button>
      </div>
    </div>
  </Modal>
)

export default ModalInvite
