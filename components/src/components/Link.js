import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

// the 'to' prop tells us the path we want to navigate to
// the 'children' prop will contain text inside the anchor tag
function Link({ to, children, className, activeClassName }) {
  // use the 'navigate' function from the navigation context in order to
  // get the links ready for navigating the app
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    'text-blue-500',
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>{children}</a>
  );

};

export default Link;