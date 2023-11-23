import React from 'react'
import './styles.scss'
import SearchBox from './SearchBox'
import DatePicker from './DatePicker'
import LocationPicker from './LocationPicker'
import GreenFillButton from '../GreenFillButton'

interface DataItem {
  ID: number;
  Name: string;
  Type: string;
  Date: string;
  Location: string;
}

const fetchSuggestions = async (inputValue: string): Promise<string[]> => {
  // Replace this with your actual API endpoint
  var venueTypes = [];

  if(inputValue != "") {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/api/v1/venue/${inputValue}`);
        const data = await response.json();
        if(data != null)
          venueTypes = data.map((item : DataItem) => item.Type);
      } catch(ex) {
        // 
      }
  }

  return venueTypes;
};

const SearchBar = () => {
  return (
      <div className='search-bar'>
        <h2>Book Your Dream Venue Today: Find, Reserve, and Play with Ease!</h2>
        <div className='search-items'>
            <SearchBox fetchSuggestions={fetchSuggestions} placeholder="Venue type"  />

            <DatePicker placeholder='Date'/>
            <LocationPicker placeholder='Location' />

            <GreenFillButton text='Search' />
        </div>
      </div>
    
  )
}

export default SearchBar