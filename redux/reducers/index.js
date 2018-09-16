import { combineReducers } from 'redux'
import { 
    SET_LISTS,
} from '../actions/'

function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        } else {
            return state
        }
    }
}

export const lists = createReducer([], {
    [SET_LISTS]: (state, action) => {
        return action.lists
    }
})

export const rootReducer = combineReducers({
    lists
})
