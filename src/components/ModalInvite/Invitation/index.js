import React from 'react'
import './index.scss'
import Button from './../../Button'

const invitationsStub = [
  {
    name: 'Milan Gladis (Owner)',
    email: 'hello@milangladis.com',
    spent: 'Spent 3h 34mins',
    actionText: 'Transfer ownership'
  },
  {
    name: 'Emma Watson (Owner)',
    email: 'emma@watson.com',
    spent: 'Spent 3h 34mins',
    actionText: 'Revoke Access'
  },
  {
    name: 'Public link ',
    email: 'http://lor.em/l296gdk6',
    spent: '',
    actionText: 'Revoke link'
  },
  {
    name: 'Milan Gladis (Owner)',
    email: 'emma@watson.com',
    spent: 'Spent 5h 30mins',
    actionText: 'Revoke Access'
  },
  {
    name: 'Emma Watson (Owner)',
    email: 'http://lor.em/l296gdk6',
    spent: '',
    actionText: 'Transfer ownership'
  }
]

const Invitation = props => {
  return (
    <div className="Invitation">
      {invitationsStub.map(({ name, email, spent, actionText }, index) => (
        <div className="Invitation__block" key={index}>
          <div className="Invitation__user">
            <div className="Invitation__block-photo">
              <img src="https://picsum.photos/30/30" alt="" />
            </div>
            <div className="Invitation__block-text">
              <p>{name}</p>
              <a href="0#">{email}</a>
            </div>
          </div>
          <div className="Invitation__block-operation">
            <p className="Invitation__block-operation-p">{spent}</p>
            <Button
              className="Invitation__block-operation-button"
              typeSecondary
            >
              {actionText}
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Invitation
