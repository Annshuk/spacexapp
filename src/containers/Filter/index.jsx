import React from 'react';
import { Link } from 'react-router-dom';
import FilterSucessLand from './SuccessLand';
import FilterSucessLaunch from './SuccessLaunch';

/**
 * listing the cards
 * @param {*} RECORDS - response
 * @param {*} activeClass - pathname from props
 * @param {*} filterBy - state maintain for selected path
 * @param {*} pathName - manual given
 */
const MapRender = (RECORDS, activeClass, filterBy, pathName) => {
    return RECORDS && RECORDS.map((ele, id) => {
        let getvalue = activeClass.lyActive.split('=')[1];
        const chekCondtion = getvalue === ele;
        let active = chekCondtion ? 'active badge' : 'badge';
        return (
            <li
                key={ele.toString()}
                onClick={e => filterBy(e, activeClass.lyActive)}>
                <Link to={{ pathname: `${pathName}=` + ele }}
                    className={`${active}`} aria-label={ele}>{ele}</Link>
            </li>)
    })
}

const Filters = ({ records, filterBy, activeClass, history }) => {
    return (
        <aside className='aside'>
            <h2>Filters</h2>
            <h3 className='title'>Launch Year</h3>
            <ul className='lyc'>
                {MapRender(records, activeClass, filterBy, 'launch_year')}
            </ul>
            <h3 className='title'>Successful Launch</h3>
            <FilterSucessLaunch filterBy={filterBy} activeClass={activeClass} Path={"launch_success"} history={history} />
            <h3 className='title'>Successful Landing</h3>
            <FilterSucessLand filterBy={filterBy} activeClass={activeClass} Path={"land_success"} />
        </aside>
    )
}

export default Filters;