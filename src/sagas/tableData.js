import { put, takeEvery, call, all, select } from 'redux-saga/effects';

import axios from 'axios';

function fetchTableData() {
    return axios.get('http://176.118.165.236:8080/api/v1/plants/')
}

export function* handleFetchTableData() {

    try {

        const resp = yield call(fetchTableData);

        console.log('//// resp /////');
        console.log(resp.data);

        let data = resp.data;
/*
        data[0] = JSON.parse(JSON.stringify(resp.data[0]));

        data[1] = JSON.parse(JSON.stringify(resp.data[0]));
        data[1].id = 1;
        data[1].fullName = 'КЦ-2';
*/
        console.log('//// data /////');
        console.log(data);

        yield put({
            type: 'SET_TABLE_DATA',
            payload: data,
        });


    } catch (e) {
        console.error(e);
    }
}
