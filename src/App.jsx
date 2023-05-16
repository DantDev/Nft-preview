import React from 'react'
import mainImg from './assets/image-equilibrium.jpg'
import ethIcon from './assets/icon-ethereum.svg'
import clockIcon from './assets/icon-clock.svg'
import avatarImg from './assets/image-avatar.png'
import iconView from './assets/icon-view.svg'

function App() {
  
  return (
    <div className='container'>
      <div className='img--container'>
        <img className='card--img' alt='Image of the NFT' src={mainImg}/>
        <div className='overlay'>
        </div>
          <img className='view-icon' alt='image of the visualization icon for overlay' src={iconView} />
      </div>
          <div className='card--info'>
            <h2 className='card--title'>Equilibrium #3429</h2>
            <p className='card--text'>Our Equilibrium collection promotes balance and calm.</p>
            <div className='card--value-container'>
              <div className='eth-container'>
                <img className='eth-icon' src={ethIcon}/>
                <p className='eth-value'>0.041 ETH</p>
              </div>
              <div className='time-container'>
                <img className='time-icon' src={clockIcon}/>
                <p className='time-text'>3 days left</p>
              </div>
            </div>
              <hr/>
              <div className='user--container'>
                <img className='user--img' src={avatarImg} />
                <p className='user--text'>Creation of <strong>Jules Wyvern</strong> </p>
              </div>
          </div>
    </div>
  )
}

export default App
