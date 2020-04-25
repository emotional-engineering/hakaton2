
import React, { Component } from 'react';

import { connect } from 'react-redux';

import SortTable from '../elements/table';

const WorkshopsPage = ({tableData, scores, users}) => {

    console.log('---- render table data ----');
    console.log(tableData);

    let headers = [{ key: 'Date', sign: 'Date'}];
    let rows = [];

    tableData.map((elem, i)=>{
        headers.push({ key: i + 1, sign: elem.fullName});
    });

    console.log("--- headers ---");
    console.log(headers);

    tableData.length && tableData[0].timeData.map((elem, i) => {
        rows[i] = [];
        rows[i]['Date'] = {};
        rows[i]['Date'].value = elem.date;

        tableData.map((elem, j)=>{
            rows[i][j + 1] = {};
            rows[i][j + 1].value = elem.timeData[i].percentage;
        });

    });

    console.log("--- rows ---");
    console.log(rows);

    return (
        <div className='page'>
            <SortTable headers={headers} data={rows}/>
        </div> );

}

const mapStateToProps = (state) => {
    return {
        tableData: state.reducer.get('tableData').toJS(),
    };
};

const mapDispatchToProps = {
    //fetchUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopsPage);