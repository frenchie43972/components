import { useState } from "react";
import Table from "./Table";
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";

function SortableTable(props) {
  // Set the default parameter to null to indicate that the column is
  // unsorted
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const { config, data } = props;

  // The below statments will shift the sortOrder(column) in either
  // ascending, desceding or no order when clicked and the setSortBy
  // will adjust the rows as appropriate
  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder('asc');
      setSortBy(label);
      return;
    }
    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  // Maps over the 'config' prop and for each column in config, checks for the "sortValue"
  // poperty and if nothing there the column is returned as-is. If something is there, it will,
  // create a new object copy of the original . All this wil pass into the <th> element
  // that has a click event handler and passes to the <Table> component.
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => <th
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={() => handleClick(column.label)}
                    >
                      <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                      </div>
                    </th>
    };
  });

  let sortedData = data;
  // If the sortBy and sortOrder are NOT null
  if (sortBy && sortOrder) { 
    // This will find the column object in config that has a matching label 
    // to the sortBy state
    const { sortValue } = config.find(column => column.label === sortBy);
    // And make a copy of the data and sort it by the sortValue of either a or b
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      // Detemines if the sort order is asc or desc, if asc uses 1 if desc uses -1
      const reverseOrder = sortOrder === 'asc' ? 1 : -1;

      // If the sortValue is a string, uses the localeComapre method to compare values
      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder;
        // If NOT a string uses subtraction to compare values
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    })
  }

  // Renderes the <Table> component with update config and sorted data
  return <Table {...props} data={sortedData} config={updatedConfig} />
}

function getIcons(label, sortBy, sortOrder) {
  // If the label if the column being rendered does not match the current column, it will
  // return both an up and down arrow
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }

  // If the curent dortOrder is null(not sorted) both up and down arrows are returned
  if (sortOrder === null) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
    // If the order is ascending then the up arrow is returned
  } else if (sortOrder === 'asc') {
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    );
    // if the order is descending, the down is returned
  } else if (sortOrder === 'desc') {
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    );
  }
}

export default SortableTable;