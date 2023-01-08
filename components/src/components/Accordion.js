import { useState } from "react";
import { ImCircleDown, ImCircleLeft } from "react-icons/im";

function Accordion({items}) {
    // The useState(-1) sets a false valuse so IsExpanded defaults to false
    // so the accordion is collapsed
    const [expandedIndex, setExpandedIndex] = useState(-1);

    // This will default close all the items and allow you to open/close as 
    // needed
    const handleClick = (nextIndex) => {
        if (expandedIndex === nextIndex) {
            setExpandedIndex(-1);
        } else {
            setExpandedIndex(nextIndex);
        }
        
    };

    const renderedItems = items.map((item, index) => {
        // This variable produces a boolean 
        const isExpanded = index === expandedIndex;   
        
        const icon = <span className="text-xl">
            {/* Ternay expression to dispay an icon depanding on the state of   isExpanded (true or false) */}
            {isExpanded ? <ImCircleDown /> : <ImCircleLeft />}
        </span>

        return (
            <div key={item.id}>
                {/* This has an inline onClick event handler that will set the index to the array index item taht was clicked */}
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {/* This will look and if isExpanded is truthy, then it will
                produce the last truthy value ( <div>{item.content}</div> ). If it isExpanded is falsy, it will show the first falsy value (isExpanded) */}
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
            
        );
    });

    return (
        <div className="border-x border-t rounded">
            {renderedItems}
        </div>
    );
   
}

export default Accordion;