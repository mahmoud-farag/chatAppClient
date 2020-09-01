import React from 'react';



import './InfoBar.css';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcone from '../../icons/closeIcon.png';

const InfoBar = (props) => (
    <div className='infoBar'>
        <div className='leftInnerContainer'>
            <img className='onlineIcon' src={onlineIcon} alt='online' />
            <h2>{props.room}</h2>
        </div>
        <div className='rightInnerContainer'>
            <a href='/'> <img src={closeIcone} alt='close' /></a>

        </div>

    </div>
)

export default InfoBar;