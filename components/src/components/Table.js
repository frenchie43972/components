import { Fragment } from "react";

function Table({data, config, keyFn}) {
    // Maps over and retrieves all the information stored in config from
    // TablePage. Then created a new header with that information so 
    // when it is called in the <th> element it will show 
    const renderedHeaders = config.map((column) => {
        if (column.header) {
            return (
                <Fragment key={column.label}> 
                    {column.header()}
                </Fragment>
            );
        }
        return (
            <th key={column.label}>
                {column.label}
            </th>
        );
    });

    // Maps over and retrieves all the information stored in data from
    // TablePage. Then created a new row with that information so 
    // when it is called in the tboy element it will show everything
    const renderedRows = data.map((rowData) => {
        const renderedCells = config.map((column) => {
            return (
                <td className="p-2" key={column.label}>
                    {column.render(rowData)}
                </td>
            );
        });

        return (
            <tr className="border-b" key={keyFn(rowData)}>
                {renderedCells}
            </tr>
        );
    });
    
    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    );
}

export default Table;