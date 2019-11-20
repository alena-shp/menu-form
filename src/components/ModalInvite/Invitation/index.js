import React from 'react'
import './index.scss'
import Button from './../../Button'

const Invitation = props => {
  return (
    <div className="Invitation">
      {[
        {
          blockText: 'Transfer ownership'
        },

        {
          blockText: 'Revoke Access'
        },

        {
          blockText: 'Revoke link'
        }
      ].map((component, index) => (
        <div className="Invitation__block" key={index}>
          <div className="Invitation__block-information">
            <div className="Invitation__block-photo">
              <img src="https://picsum.photos/30/30" alt="" />
            </div>
            <div className="Invitation__block-text">
              <p>Name</p>
              <a href="0#">hello@milangladis.com</a>
            </div>
          </div>
          <div className="Invitation__block-operation">
            <p className="Invitation__block-operation-p">Spent 3h 34mins</p>
            <Button
              className="Invitation__block-operation-button"
              typeSecondary
            >
              {component.blockText}
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Invitation
