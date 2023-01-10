import classNames from "classnames";

function Panel({ children, className, ...rest }) {
  // A vaiableuses the classNames function to generate a string of 
  // class names that are default class names
  const finalClassNames = classNames(
    'border rounded p-3 shadow bg-white w-full',
    className,
  );

  // Returns a div element containg the finalClassNames variable using
  // the className prop and ...rest will cover any other props added
  return (
    <div {...rest} className={finalClassNames}>{ children }</div>
  );
}

export default Panel;