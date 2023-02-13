import React from 'react'
import { Button } from './Button'
import "./ad.css"

function Ad() {
  return (
        <div className='ads'>
            <div className='adbtn-settings'>
                <Button
                    className='btns-edit'
                    buttonStyle='btn-primary'
                    buttonSize='btn--ad'
                    >
                    <div className='plat'>
                        <div className='plat-heading'>
                            <i class="fa fa-fire"></i>  
                            <h1>
                                bunder 
                            </h1>     
                            <h2 className='plat-sign'>
                                PLATINUM
                            </h2>
                        </div> 
                        <h2 className='plat-subheading'>
                            Priority Likes, See Who Likes you & More!
                        </h2>
                    </div>
                </Button>
            </div>
            <div className='adbtn-settings'>
                <Button
                    className='btns-edit'
                    buttonStyle='btn--primary'
                    buttonSize='btn--ad'
                    >
                    <div className='gold'>
                        <div className='gold-heading'>
                            <i class="fa fa-fire"></i>  
                            <h1>
                                bunder 
                            </h1>     
                            <h2 className='gold-sign'>
                                GOLD
                            </h2>
                        </div> 
                        <h2 className='gold-subheading'>
                            See Who Likes You & More!
                        </h2>
                    </div>
                </Button>
            </div>
            <div className='adbtn-settings'>
                <Button
                    className='btns-edit'
                    buttonStyle='btn--primary'
                    buttonSize='btn--ad'
                    >
                    <div className='plus'>
                        <div className='plus-heading'>
                            <i class="fa fa-fire"></i>  
                            <h1>
                                bunder 
                            </h1>     
                            <h2 className='plus-sign'>
                                +
                            </h2>
                        </div> 
                        <h2 className='plus-subheading'>
                            Unlimited Likes & More!
                        </h2>
                    </div>
                </Button>
            </div>
            <div className='adbtn-settings'>
                <Button
                    className='btns-edit'
                    buttonStyle='btn--primary'
                    buttonSize='btn--ad'
                    >
                    <div className='upgrade'>
                        <div className='upgrade-heading'>
                            <i class="fa fa-fire"></i>  
                            <h1>
                                Upgrade Your Business Life 
                            </h1>     
                        </div> 
                        <h2 className='upgrade-subheading'>
                            Subscribe to bunder For More Premium Features!
                        </h2>
                    </div>
                </Button>
            </div>
        </div>
  )
}

export default Ad