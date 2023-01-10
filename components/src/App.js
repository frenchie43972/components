import { useState } from 'react';
import Dropdown from './components/Dropdown';

function App() {
    // A ne wpiece of state wher "selection" is the current selected option and
    // setSelection is the function that updates "selection"
    const [selection, setSelection] = useState(null);

    // Handles the selection adn update of the selected option
    const handleSelect = (option) => {
        setSelection(option);
    }
    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
        { label: 'Green', value: 'green' },
    ];

    return (
        // Renders the Dropdown component with the options property set to the
        // options array and the value and onChange to the selection piece
        // of state and handleSelect function respectively
        <Dropdown
        options={options}
        value={selection}
        onChange={handleSelect}
        />
    ); 
}

  export default App;