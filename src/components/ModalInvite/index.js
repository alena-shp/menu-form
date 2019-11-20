import React from 'react'
import Modal from '../Modal'
import './index.scss'
import ButtonSelect from '../ButtonSelect'
import Button from '../Button'
import Invitation from './Invitation'
import SearchForm from '../SearchForm'

const ModalInvite = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title="Invite people to project"
    >
      <SearchForm />
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
}

export default ModalInvite
