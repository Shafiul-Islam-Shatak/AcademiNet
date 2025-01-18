import React from 'react'
const HeroSection = () => {
  return (
    <div className='relative'>
      <section className="" id="banner">
        <video className="w-full "
          style={{ maxHeight: '800px', objectFit: 'cover' }}
          id="videobcg" autoPlay loop muted >
          <source src='https://cdn.pixabay.com/video/2024/03/15/204243-923909579_large.mp4' type='video/mp4' />
        </video>
      </section>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-5 
        bg-gray-500 bg-opacity-30 p-3 rounded-md text-gray-200 ">
        <h1 className="text-2xl lg:text-5xl font-semibold ">A Classical Education for the Future</h1>
        <p className='text-sm lg:text-3xl '>We prepare you to engage in the world that is and to help bring about a world that ought to be</p>
      </div>
    </div>
  )
}

export default HeroSection
