import React from 'react'
import './styles.scss'

import { FaMapMarker } from "react-icons/fa";

interface IPlaceHolder {
    placeholder: string;
}

const LocationPicker = ({placeholder}: IPlaceHolder) => {
  return (
    <div className='locationpicker'>
        <label>{placeholder}</label>
        <FaMapMarker className='locationpicker-icon' color='#818d90' />
        <img src='https://svgshare.com/i/zxA.svg' alt='down-arrow' width={24} height={24} />
    </div>
  )
}

export default LocationPicker