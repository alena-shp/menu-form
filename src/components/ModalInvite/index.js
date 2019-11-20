import React from 'react'
import Modal from '../Modal'
import { Formik, Field, Form } from 'formik'
import classNames from 'classnames'
import BasicFormSchema from '../../BasicFormSchema'
import './index.scss'
import { ReactComponent as Search } from '../../assets/Search.svg'
import ButtonSelect from '../ButtonSelect'
import Button from '../Button'
import Invitation from './Invitation'

const ModalInvite = props => {
  return (
    <Modal isOpen title="Invite people to project">
      <Formik
        initialValues={{
          search: ''
        }}
        validationSchema={BasicFormSchema}
        onSubmit={value => {
          setTimeout(() => {
            alert(JSON.stringify(value, null, 2))
          }, 300)
        }}
        render={({ errors, touched }) => (
          <Form className="InvitationSearch">
            <div
              className={classNames('InvitationSearch__search', {
                'InvitationSearch__search--invalid':
                  errors.search && touched.search
              })}
            >
              <span className="InvitationSearch__icon">
                <Search />
              </span>

              <Field
                className="InvitationSearch__input"
                name="search"
                placeholder="Name or email"
                type="text"
              />

              <ButtonSelect />
            </div>

            <Button type="submit" typePrimary>
              Invite 1 person
            </Button>
          </Form>
        )}
      />

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
