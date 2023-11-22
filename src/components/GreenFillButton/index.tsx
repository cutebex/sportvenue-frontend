import React from 'react'
import './styles.scss';

interface IBtn {
  text: string;
}

const GreenFillButton = ({text}: IBtn) => {
  return (
    <button className='green-fill-btn'>{text}</button>
  )
}

export default GreenFillButton