import { getAllLists, loading, fetchStatus, fetchDataRejected, getFilterByYear } from '../actions';
import axios from 'axios';
const apiUrl = 'https://api.spaceXdata.com/v3/launches';
let filters = [];
const transformFilter = (res) => {
    const Filters = { launchYear: [] };
    const Response = res && res.data;
    return Response.map(ele => {
        return Filters.launchYear = ele.launch_year
    })
}
export const fetchAllData = () => (dispatch) => {
    dispatch(loading(true))
    dispatch(fetchStatus(true))
    axios({ method: 'GET', url: `${apiUrl}?limit=100`, timeout: 200000 }).then(res => {
        dispatch(loading(false))
        const records = transformFilter(res)
        filters = [...new Set(records)];
        localStorage.setItem('filterData', JSON.stringify(filters));
        dispatch(getAllLists(res, filters));
    }).catch(error => {
        dispatch(fetchDataRejected(error))
    });
}

export const filterBy = (value) => (dispatch) => {
    dispatch(loading(true))
    dispatch(fetchStatus(true))
    axios({ method: 'GET', url: `${apiUrl}?limit=100&&${value}`, timeout: 200000 }).then(res => {
        dispatch(loading(false))
        dispatch(getFilterByYear(res, filters));
    }).catch(error => {
        dispatch(fetchDataRejected(error))
    });
}
