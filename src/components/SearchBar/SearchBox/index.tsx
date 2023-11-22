import React, { useState, useRef, useEffect, KeyboardEvent, MouseEvent }  from 'react'
import './styles.scss'
import SuggestionList from '../SuggestionList';

interface IAutocompleteProps {
  // The function to fetch suggestions from the server
  fetchSuggestions: (inputValue: string) => Promise<string[]>;
  placeholder: string;
}

const SearchBox : React.FC<IAutocompleteProps> = ({fetchSuggestions , placeholder  }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [suggestionVisible, setSuggestionVisible] = useState<boolean>(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState<number | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  // Fetch suggestions when the input value changes
  const fetchSuggestionsAsync = async (value : string) => {
    try {
      const newSuggestions = await fetchSuggestions(value);
      setSuggestions(newSuggestions);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.value == "")
      setSuggestions([]);
    else
      fetchSuggestionsAsync(event.target.value);
      
    setInputValue(event.target.value);
  };

  const handleSuggestionClick = (index: number) => {
    // Handle suggestion click
    setInputValue(suggestions[index]);
    setSuggestionVisible(false)
  };

  const handleInputFocus = () => {
    // if(suggestions.length > 0)
      setSuggestionVisible(true);
  }

  const handleInputBlur = () => {
    // Clear selection on input blur
    const timeoutId = setTimeout(() => {
      setSuggestionVisible(false)
    }, 100); // Adjust the delay as needed
  };

  return (
    <div className='relative'>
      <div className='search-box'>
          <img src={'https://svgshare.com/i/zxm.svg'} width={24} height={24}/>
          <input 
            id="searchbox"
            className='search-input' 
            placeholder={placeholder} 
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            ref={inputRef}
          />
      </div>

      {suggestionVisible && (
        <ul className='search-box__suggestion-list'>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className={index === selectedSuggestionIndex ? 'selected' : ''}
              onClick={() => handleSuggestionClick(index)}
            >
              <label htmlFor='searchbox'>{suggestion}</label>
            </li>
          ))}
        </ul>
      )}

      {/* <SuggestionList /> */}
    </div>
  )
}

export default SearchBox