import React from 'react'
import { ReactComponent as IconArrowDown } from '../../assets/IconArrowDown.svg'
import './index.scss'

const ButtonSelect = () => (
  <div className="ButtonSelect">
    <span className="ButtonSelect__arrow">
      <IconArrowDown />
    </span>
    <select size="1">
      <option>Can edit</option>
      <option>Can edit</option>
      <option>Can edit</option>
    </select>
  </div>
)

export default ButtonSelect
