import React from 'react'
import Pins from '../Pins'
import './Favorites.css'

function Uncanny() {
    const myStyle={
        backgroundColor: 'gray',
        height:'400vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
  return (
    <div style={myStyle}>
        <h1 className='h1-mr'>
            Uncanny Valley
        </h1>
        <div className='table'>
            <div>
                <Pins
                src='images/uncannyanthony.jpeg'
                text='Gorillaz Anthony'
                label='November 2022'
                path='/uncanny-valley'
                />
                <Pins
                src='images/uncannybarsh.jpeg'
                text='Barsh'
                label='November 2022'
                path='/uncanny-valley'
                />
            </div>
            <div>
                <Pins
                src='images/uncannydash.jpeg'
                text='Uncanny Dash'
                label='September 2022'
                path='/favorites'
                />
                <Pins
                src='images/uncannyfaye.jpeg'
                text='Faye'
                label='November 2020'
                path='/uncanny-valley'
                />
            </div>
            <div>
                <Pins
                src='images/uncannyakira.jpeg'
                text='Akira and Ryo'
                label='December 2019'
                path='/uncanny-valley'
                />
                <Pins
                src='images/uncannyitachi.jpeg'
                text='Itachi'
                label='December 2019'
                path='/uncanny-valley'
                />
            </div>
            <div>
                <Pins
                src='images/uncannygohan.jpeg'
                text='Uncanny Gohan'
                label='September 2019'
                path='/uncanny-valley'
                />
            </div>
        </div>
    </div>
  )
}

export default Uncanny