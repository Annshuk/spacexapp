import React from 'react';

const Cards = ({ data }) => {
    return (
        <section className='space-container'>
            <ul className='card-deck'>
                {data && data.map((ele, index) => {
                    const { launch_success, launch_year, mission_name, flight_number, mission_id, rocket: { first_stage }, links } = ele;
                    return (
                        <li key={ele + index}>
                            <figure>
                                <img src={links.mission_patch} alt={mission_name} />
                            </figure>
                            <h3 className='title'>{mission_name} # {flight_number}</h3>
                            <p><strong>Mission Ids</strong></p>
                            <ul style={{ paddingLeft: '20px', marginBottom: '.5rem' }}>
                                {mission_id && mission_id.map((elem, key) => {
                                    return (<li key={elem + key}>{elem}</li>)
                                })

                                }
                            </ul>
                            <p><strong>Launch Year :</strong> {launch_year}</p>
                            <p><strong>Success Launch :</strong> {launch_success ? "True" : "False"} </p>
                            <p><strong>Successful Landing :</strong> {first_stage.cores[0].land_success ? "True" : "False"}</p>
                        </li>
                    )
                })
                }

            </ul>
        </section >)

}

export default Cards;