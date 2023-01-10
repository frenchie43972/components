import { useState } from 'react';
import { ImCircleDown } from "react-icons/im"
import Panel from './Panel';

// uses options, slection and onSelect from App as arugments
function Dropdown({ options, value, onChange }) {
  // isOpen is a boolena representing if the dropdaown menu is open or closed
  // setIsOpen is a function to update isOpen's value
  const [isOpen, setIsOpen] = useState(false);

  // The event handler enables you to toggle the open/close
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // This handler will take the value selected and close the dropdown menu
  const handleOptionClick = (option) => {
    // Closes the dropdown menu when after value is selected
    setIsOpen(false);
    // Selects the option the user clicked on
    onChange(option);
  }

  // Maps over the options property to create a div element for each
  // "option" rendered
  const renderedOptions = options.map((option) => {
    return (
      // Sets the key property to the option.value and onClick calls
      // the handleoptionClick and passes the option object as an 
      // argument
      <div className='hover:bg-sky-100 rounded cursor-pointer p-1'
        onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  return (
    <div className='w-48 relative'>
      <Panel className='flex justify-between items-center cursor-pointer'
        onClick={handleClick}>
        {/* This expression is using the optional chaining operator (?.) and to provide a 
        default value if "selection" is null or undefined. the optional chaining operator (?.)
        allows you to access deep into a property wothout having to manually check if it is
        null or undefined */}
        {value?.label || 'Select...'}   
        <ImCircleDown className='text-lg' />
      </Panel>
      {/* Conditionally render the div element IF isOpen is TRUE */}
      {isOpen &&
        <Panel className='absolute top-full'>
          {renderedOptions}
        </Panel>}
    </div>
  );
}

export default Dropdown;