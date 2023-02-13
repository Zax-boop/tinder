import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import "./chat.css"
import Pins from '../Pins';
import { Matches } from '../Matches'


function Chat() {
    const myStyle={
        backgroundColor: '#f0f2f4',
        height:'100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div style={myStyle} className='messages'>
            <div className='table'> 
            {Matches.map((match, index) => {
            return(
                <div>
                    <Pins
                        src={match.image}
                        text={match.name}
                        label={match.searching}>
                    </Pins>
                </div>
                
            )
            })}
            </div>
            <div className='chat-outline'>
                <ChatEngine
                    projectID='1681834f-4615-4a46-8290-dc6c1121204a'
                    userName='Rohan'
                    userSecret='Bebop'
                />  
            </div>
        </div>
    );
}

export default Chat;