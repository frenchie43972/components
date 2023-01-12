import useNavigation from '../hooks/use-navigation';


function Route({ path, children }) {
  // Grabbing currentPath from navigation context to use
  const { currentPath } = useNavigation();

  if (path === currentPath) {
    return children;
  }

  return null;
}

export default Route;