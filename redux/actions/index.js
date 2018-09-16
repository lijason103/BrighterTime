export const SET_LIST = 'SET_LIST';

export function setLists(lists) {
    return (dispatch) => {
        dispatch({
            type: SET_LISTS,
            lists: lists
        })
    }
}