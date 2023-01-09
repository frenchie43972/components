import { useState } from 'react';

function Dropdown({ options }) {
  // isOpen is a boolena representing if the dropdaown menu is open or closed
  // setIsOpen is a function to update isOpen's value
  const [isOpen, setIsOpen] = useState(false);

  // The event handler enables you to toggle the open/close
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // This handler will take the value selected and close the dropdown menu
  const handleOptionClick = (option) => {
    setIsOpen(false);
  }

  
  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div onClick={handleClick}>Select...</div>
      {isOpen && <div>{ renderedOptions }</div>}
    </div>
  );
}

export default Dropdown;