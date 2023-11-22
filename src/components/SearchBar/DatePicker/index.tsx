import React from 'react'
import './styles.scss'

import { FaCalendar } from "react-icons/fa";

interface IPlaceHolder {
  placeholder: string;
}

const DatePicker = ({placeholder}: IPlaceHolder) => {
  return (
    <div className='datepicker'>
      <label>{placeholder}</label>
      <FaCalendar className='datepicker-icon' color='#818d90' />
      <img src='https://svgshare.com/i/zxA.svg' alt='down-arrow' width={24} height={24} />
    </div>
  )
}

export default DatePicker