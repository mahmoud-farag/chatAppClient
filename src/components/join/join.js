import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './join.css';

// func component
const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');


    return (
        <div className='joinOuterContainer'>
            <div className='joinInnerContainer'>
                <h1 className='heading'>Join</h1>
                <input placeholder='name' className='joinInput' type='text' onChange={e => setName(e.target.value)} />
                <input placeholder='room' className='joinInput mt-20' type='text' onChange={e => setRoom(e.target.value)} />
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className='button mt-20' type='submit'>Sign in</button>
                </Link>
            </div>

        </div >
    );
};


//class component

// class join extends React.Component {

//     render() {
//         return (
//             <div>
//                 <h1>New join</h1>
//             </div>
//         )
//     }
// }


export default Join;
