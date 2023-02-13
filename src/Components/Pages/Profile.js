import React from 'react'
import './Profile.css';
import TinderCards from '../Personal_Profile'
import { Button } from '../Button';
import Ad from '../ad';


function AboutMe() {
    const myStyle={
        backgroundColor: '#f0f2f4',
        height:'100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div style={myStyle}>
            <div className='container'>
                <div className='ad-settings'>
                    <Ad/>
                </div>
                <div className='container-col'>
                    <div className="DivWrapper-hero">
                    <TinderCards/>
                    </div>
                    <div className="btn-settings">
                        <Button
                            className='btns-edit'
                            buttonStyle='btn--outline'
                            buttonSize='btn--large'
                            >
                            <h1 className='profile-btn'>
                                Edit Info (75% Complete)
                            </h1>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe