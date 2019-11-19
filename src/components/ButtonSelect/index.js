import React from 'react'
import { ReactComponent as ArrowDown } from '../../assets/ArrowDown.svg'

const ButtonSelect = () => (
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
)

export default ButtonSelect
