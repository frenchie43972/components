// useRef allows a component to get a reference to a DOM element
import { useState, useEffect, useRef } from 'react';
import { ImCircleDown } from "react-icons/im"
import Panel from './Panel';

// uses options, slection and onSelect from App as arugments
function Dropdown({ options, value, onChange }) {
  // isOpen is a boolena representing if the dropdaown menu is open or closed
  // setIsOpen is a function to update isOpen's value
  const [isOpen, setIsOpen] = useState(false);
  
  const divEl = useRef();

  // This code uses the useEffect hook to sync this component with an external system 
  // ('document' object listening for click events)
  useEffect(() => {
    const handler = (event) => {
      // if the divEl is null noting is called, but if it is not, then it will update 
      // setIsOpen with what was clicked
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener to the document object and lisen for the click event and calls
    // the above defined handler function each click
    document.addEventListener('click', handler, true);

    // Turns off the event handler
    return () => {
      document.removeEventListener('click', handler);
    };

    // The empty array at the end tells React that this effect does not depend on any other
    // props or state and only when first rendered
  }, []);

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
    <div ref={divEl} className='w-48 relative'>
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