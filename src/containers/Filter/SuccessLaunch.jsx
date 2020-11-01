
import React from 'react';
import { Link } from 'react-router-dom';
/**
 * 
 * @param {*} param all the params is props from filter component. this is the sub filter component
 */
const FilterSucessLaunch = ({ filterBy, activeClass, Path, history }) => {
    return (
        <ul className='lyc'>
            <li onClick={e => filterBy(e, 'launch_success=true')}>
                <Link className={(activeClass.lyActive === Path + "=true") ? 'active badge' : 'badge'} to={{ pathname: 'launch_success=true' }}>True</Link>
            </li>
            <li onClick={e => filterBy(e, 'launch_success=false')}>
                <Link className={(activeClass.lyActive === Path + "=false") ? 'active badge' : 'badge'} to={{ pathname: 'launch_success=false' }}>False</Link>
            </li>
        </ul>)
}

export default FilterSucessLaunch;