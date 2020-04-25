import { fromJS } from 'immutable';

const initialState = fromJS({
    tableData: [],
})

export default function reducer (state = initialState, action) {

    switch (action.type) {
        case 'SET_TABLE_DATA':
            return state.set('tableData', fromJS(action.payload));
        case "CELL_CLICK":


            return true;
            //return state.set('tableData', fromJS(scores));


    }

    return state;
}
