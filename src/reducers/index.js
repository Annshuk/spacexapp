import {
    GET_LIST,
    LOADING,
    BY_LAUNCH_YEAR,
    ERROR_REQ
} from '../actions/actionsType';
import { combineReducers } from 'redux';
const initialState = {
    spaceList: [],
    filterData: [],
    error: null,
    loading: true
}
function SpaceReducer(state, action) {
    state = initialState;
    switch (action.type) {
        case GET_LIST:
            return { ...state, spaceList: action.payload.data, filterData: action.payload.filter, loading: false }
        case BY_LAUNCH_YEAR:
            return { ...state, spaceList: action.payload.data.data, filterData: action.payload.filter, loading: false }
        case LOADING:
            return { ...state, loading: false }
        case ERROR_REQ:
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}

export default combineReducers({ SpaceReducer });