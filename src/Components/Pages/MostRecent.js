import React from 'react'
import './Favorites.css'
import Pins from '../Pins'

function MostRecent() {
    const myStyle={
        backgroundColor: 'gray',
        height:'400vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
  return (
    <div style={myStyle}>
        <h1 className='h1-mr'>
            Most Recent
        </h1>
        <div className='table'>
            <div>
                <Pins
                src='images/mikasa.jpeg'
                text='Mikasa Sketch'
                label='January 2022'
                path='/most-recent'
                />
                <Pins
                src='images/eren2.jpeg'
                text='Eren Sketch'
                label='January 2022'
                path='/most-recent'
                />
            </div>
            <div>
                <Pins
                src='images/eye.jpeg'
                text='Demon Eye'
                label='December 2022'
                path='/most-recent'
                />
                <Pins
                src='images/mob.jpeg'
                text='Mob'
                label='December 2022'
                path='/most-recent'
                />
            </div>
            <div>
                <Pins
                src='images/sketch.jpeg'
                text='Sketch'
                label='December 2022'
                path='/most-recent'
                />
                <Pins
                src='images/Dash.jpeg'
                text='Dash'
                label='December 2022'
                path='/most-recent'
                />
            </div>
            <div>
                <Pins
                src='images/uncannyanthony.jpeg'
                text='Gorillaz Anthony'
                label='December 2022'
                path='/most-recent'
                />
                <Pins
                src='images/ian.jpeg'
                text='Ian'
                label='November 2022'
                path='/most-recent'
                />
            </div>
        </div>
    </div>
  )
}

export default MostRecent