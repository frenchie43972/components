import { createContext, useState, useEffect } from "react";

// Creates the context object
const NavigationContext = createContext();

// Creates the Provider component
function NavigationProvider({ children }) {
  // Initializes currentPath with the user's current location using the useState hook
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Event handler that sets currentPath to the current pathname of 
    // the browser window
    const handler = () => { 
      setCurrentPath(window.location.pathname);
    };

    // Event listener for the 'popstate' event which is fired when the
    // user navigates bak and forth in the browser
    window.addEventListener('popstate', handler);

    // Cleanup function that removes the event listener when the 
    // component unmounts
    return () => {
      window.removeEventListener('popstate', handler);
    };
    // The empty array at the end ensures the useEffect hook is only
    // run once on component mount and does no re-run on subsequent renders
  }, []);

  // The Provider component returns this with the value prop that grant the children
  // of the component access to the prop 'value'
  return <NavigationContext.Provider value={{}}>
    {currentPath}
    {children}
  </NavigationContext.Provider>
}

export { NavigationProvider };
export default NavigationContext;