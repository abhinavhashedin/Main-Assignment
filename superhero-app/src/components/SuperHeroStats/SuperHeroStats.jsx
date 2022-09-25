import React from 'react'
import { Badge } from 'react-bootstrap';
import './SuperHero.css';

const SuperHeroStats = ({label,obj}) => {
    return (
        <div className='stats'>
            <h2 style={{ "left": '0' }}><Badge bg="secondary">{label}</Badge></h2>
            <ul style={{ "listStyleType": 'none' }}>
                {obj && Object.entries(obj).map(function ([key, value]) {
                    return (
                        <>
                            <li>{`${key.toLocaleUpperCase()} : ${value}`}</li>
                        </>
                    )
                })}
            </ul>
        </div>
    )
}

export default SuperHeroStats