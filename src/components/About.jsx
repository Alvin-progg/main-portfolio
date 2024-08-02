import React from 'react'
import Techstack from './Techstack';

const About = React.forwardRef((props, ref) => {
  return (
    <main id='about' className='h-screen  flex-1 flex just ify-center items-center px-4 lg:px-0' ref={ref}>
        <div className='flex flex-col   lg:mx-44 gap-7'>
            <span className='text-4xl text-gray-500'>Hi i Am <span className='font-bold text-white'>Alvin</span></span>
            <span className='text-3xl text-gray-500'>I have a passion for building minimalist websites. When I'm not immersed in web development, you'll find me enjoying workouts, learning new programming languages, or cycling through scenic routes.</span>
            <div className="flex flex-col gap-4 ">
                <span className=' text-4xl text-white '>Tech Stack :</span>
                <Techstack />
              
            </div>
        </div>
    </main>
  )
});

export default About