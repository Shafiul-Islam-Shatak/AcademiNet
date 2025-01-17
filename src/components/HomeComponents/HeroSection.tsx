import React from 'react'
import BannarImg from '../../assets//banner2.png';
import Image from 'next/image'
const HeroSection = () => {
  return (
    <div>
      <section className="" id="banner">
        <video className="w-full " id="videobcg" autoPlay loop muted >
          <source src='https://cdn.pixabay.com/video/2024/03/15/204243-923909579_large.mp4' type='video/mp4' />
        </video>
      </section>
    </div>
  )
}

export default HeroSection
