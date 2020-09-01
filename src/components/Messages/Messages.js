import React from 'react';
import ScrollToButtom from 'react-scroll-to-bottom';

import './Messages.css';


import Message from './Message/Message';
// func component
const Messages = (props) => {



    console.log(props.mesgs)

    return (



        <ScrollToButtom className='messages'>
            {props.mesgs.map((mesg, index) => <div key={index}><Message mesg={mesg} name={props.name} /> </div>)}
        </ScrollToButtom>

    )

}





export default Messages;
