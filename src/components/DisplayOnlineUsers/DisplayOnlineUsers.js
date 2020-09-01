import React from 'react';


import './DisplayOnlineUsers.css';

import onlineIcon from '../../icons/onlineIcon.png';

const DisplayOnlineUsers = ({ users, room }) => (

    <div className="textContainer">
        <div>
            <h1>Private Chat with my own friends<span role="img" aria-label="emoji">💬</span></h1>
            <h2>I creat this chat use TECH ReactJS, expressJS, nodeJS, socketIO <span role="img" aria-label="emoji">❤️</span></h2>
            <h2>Enjoy my friend with my App! <span role="img" aria-label="emoji">⬅️</span></h2>
        </div>
        {
            users
                ? (
                    <div>
                        <h1>your Current online friends in room:{room}</h1>
                        <div className="activeContainer">
                            <h2>
                                {users.map(({ name }) => (
                                    <div key={name} className="activeItem">
                                        <img alt="Online Icon" src={onlineIcon} />

                                        {name}

                                    </div>
                                ))}
                            </h2>
                        </div>
                    </div>
                )
                : null
        }
    </div>
)

export default DisplayOnlineUsers;