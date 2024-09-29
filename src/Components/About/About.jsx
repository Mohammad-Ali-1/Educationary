import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
export const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nuturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iste ut perspiciatis labore, assumenda amet odio id magni quis molestiae ex architecto voluptas harum at ipsum repudiandae consequatur aut corporis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illo temporibus ratione praesentium dolorem tenetur minima exercitationem qui dolores eaque.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla similique accusamus quo praesentium porro neque magni hic adipisci repellendus soluta, quis quas dicta tempore eos totam quibusdam perspiciatis amet, reiciendis suscipit! Sapiente impedit voluptate cupiditate id excepturi magni hic quia.</p>
        </div>
    </div>
  )
}
