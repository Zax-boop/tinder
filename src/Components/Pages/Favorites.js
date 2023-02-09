import React from 'react'
import Pins from '../Pins'
import './Favorites.css'

function Favorites() {
    const myStyle={
        backgroundColor: 'gray',
        height:'400vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
  return (
    <div style={myStyle}>
        <h1 className='h1'>
            Favorites
        </h1>
        <div className='table'>
            <div>
                <Pins
                src='images/eren2.jpeg'
                text='Eren Sketch'
                label='January 2022'
                path='/favorites'
                />
                <Pins
                src='images/mob.jpeg'
                text='Mob'
                label='December 2022'
                path='/favorites'
                />
                <Pins
                src='images/Dash.jpeg'
                text='Dash'
                label='December 2022'
                path='/favorites'
                />
                <Pins
                src='images/spooks.jpeg'
                text='My Chair'
                label='November 2022'
                path='/favorites'
                />
                <Pins
                src='images/dash2.jpeg'
                text='Sweaty Dash'
                label='November 2022'
                path='/favorites'
                />
            </div>
            <div>
                <Pins
                src='images/liquid_smooth.jpeg'
                text='Liquid Smooth'
                label='November 2022'
                path='/favorites'
                />
                <Pins
                src='images/collage.jpeg'
                text='Collage'
                label='October 2022'
                path='/favorites'
                />
                <Pins
                src='images/banana_fish.jpeg'
                text='Ash and Eiji'
                label='October 2022'
                path='/favorites'
                />
                <Pins
                src='images/chiyuki.jpeg'
                text='Death Parade'
                label='September 2022'
                path='/favorites'
                />
                <Pins
                src='images/silent_voice.jpeg'
                text='Shoto and Shoko'
                label='September 2022'
                path='/favorites'
                />
            </div>
            <div>
                <Pins
                src='images/temporex.jpeg'
                text='Temporex'
                label='September 2022'
                path='/favorites'
                />
                <Pins
                src='images/eren.jpeg'
                text='Eren'
                label='September 2022'
                path='/favorites'
                />
                <Pins
                src='images/pocky.jpeg'
                text='Pocky'
                label='July 2022'
                path='/favorites'
                />
                <Pins
                src='images/skater.jpeg'
                text="Skeleskater"
                label='May 2021'
                path='/favorites'
                />
                <Pins
                src='images/dante.jpeg'
                text='Dante'
                label='December 2020'
                path='/favorites'
                />
                <Pins
                src='images/viper.jpeg'
                text='Viper'
                label='October 2020'
                path='/favorites'
                />
                <Pins
                src='images/omen.jpeg'
                text='Omen'
                label='October 2020'
                path='/favorites'
                />
            </div>
            <div>
                <Pins
                src='images/Jett.jpeg'
                text='Jett'
                label='October 2020'
                path='/favorites'
                />
                <Pins
                src='images/fuu.jpeg'
                text='Fuu'
                label='January 2020'
                path='/favorites'
                />
                <Pins
                src='images/spike2.jpeg'
                text='Whatever Happens, Happens..'
                label='December 2019'
                path='/favorites'
                />
                <Pins
                src='images/spike3.jpeg'
                text='Spike in the Rain'
                label='September 2019'
                path='/favorites'
                />
                <Pins
                src='images/garou.jpeg'
                text='Garou'
                label='September 2019'
                path='/favorites'
                />
            </div>
        </div>
    </div>
  )
}

export default Favorites