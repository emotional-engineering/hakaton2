import React from 'react';

import { connect } from 'react-redux';

import {Table, Column, Cell} from 'fixed-data-table-2';

import { cellHover, cellClick, action } from '../redux/actions.js';

import 'fixed-data-table-2/dist/fixed-data-table.css';

const CustomCell = ({percent, rowIndex, columnKey}) => {

    if (percent === false) return <div>NA</div>

    return <div className='tableCell'
        key={rowIndex + '_' + columnKey}
        onClick={e => { console.log('click - ', rowIndex, columnKey) }}>
        {percent}
        <span className="cellPercent" style={{ 'backgroundColor' : percent > 70 ? 'green' : 'red', 'width': percent }}></span>
    </div>

}

const SortTable = ({headers, data, cellHover, cellClick}) => {

    return (
        <Table
            rowHeight={50}
            rowsCount={data.length}
            width={800}
            height={5000}
            headerHeight={50} >
            {headers && headers.map((header, index) => {
                return <Column columnKey={header.key}
                        header={<Cell>{header.sign}</Cell>}
                                cell={({rowIndex, columnKey, ...props}) => (
                                    <Cell {...props}>
                                        <CustomCell percent={data[rowIndex] && data[rowIndex][columnKey] ? data[rowIndex][columnKey].value : false} rowIndex={rowIndex} columnKey={columnKey}/>
                                    </Cell>
                                )}
                        width={200}
                        key={'___' + index}
                />
            })}

        </Table>
    );
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = {
    cellHover,
    cellClick
};

export default connect(mapStateToProps, mapDispatchToProps)(SortTable);
