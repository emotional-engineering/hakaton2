
import store from './store';

export const action = (type, payload) => store.dispatch({type, payload});

export function cellClick(rowId, column) {

    column = + column.replace("score", "");

    return {
        type: "CELL_CLICK",
        rowId,
        column
    };
}

export function cellHover(rowId, columnId) {

    return {
        type: "CELL_HOVER",
        rowId,
        columnId
    };

}