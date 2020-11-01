import React from 'react';
import { Link } from 'react-router-dom';
/**
 * 
 * @param {*} param all the params is props from filter component. this is the sub filter component
 */
const FilterSucessLand = ({ filterBy, activeClass, Path }) => {
    return (
        <ul className='lyc'>
            <li onClick={e => filterBy(e, 'land_success=true')}>
                <Link aria-label='land success true' className={(activeClass.lyActive === Path + "=true") ? 'active badge' : 'badge'} to={{ pathname: 'land_success=true' }}>True</Link>
            </li>
            <li onClick={e => filterBy(e, 'land_success=false')}>
                <Link aria-label='land success false' className={(activeClass.lyActive === Path + "=false") ? 'active badge' : 'badge'} to={{ pathname: 'land_success=false' }}>False</Link>
            </li>
        </ul>)
}

export default FilterSucessLand;