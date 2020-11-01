import {
    FETCH_API_START,
    GET_LIST, 
    LOADING,
    BY_LAUNCH_YEAR,
    ERROR_REQ
} from './actionsType';

/**
 * 
 * @param {*} flag true or false for loading until data
 */
export const loading = (flag) => {
    return {
        type: LOADING, payload: flag
    }
}

/**
 * 
 * @param {*} data response from api 
 * @param {*} filter filter year data only
 */
export const getAllLists = (data, filter) => {
    return {
        type: GET_LIST,
        payload: { data: data.data, filter }
    }
}

export const getFilterByYear = (data, filter) => {
    return {
        type: BY_LAUNCH_YEAR,
        payload: { data, filter }
    }
}

/**
 * 
 * @param {*} flag true or false for api start 
 */
export function fetchStatus(flag) {
    return {
        type: FETCH_API_START,
        data: flag
    }
}

/**
 * 
 * @param {*} flag true or false if api failed
 */
export const fetchDataRejected = (flag) => {
    return {
        type: ERROR_REQ,
        data: flag
    }
}

