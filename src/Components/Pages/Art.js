import React from 'react'
import { Button } from '../Button'
import './Art.css';

function Art() {
  return (
    <div className='art-container'>
        <video src='/videos/spikesmoking.mp4' autoPlay loop muted />
        <h1 className='heading'>
        
        </h1>
        <div className='art-btns'>
            <div className='fav-btn'>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                link='/favorites'
                >
                Favorites
                </Button>
            </div>
                <div className='recent-btn'>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                link='/most-recent'
                >
                Most Recent
                </Button>
            </div>
            <div className='uncanny-btn'>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                link='/uncanny-valley'
                >
                Uncanny Valley 
                </Button>
            </div>
            <div className='all-btn'>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                link='/all'
                >
                All 
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Art