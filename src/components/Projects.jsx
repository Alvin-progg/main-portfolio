import React from 'react'
import Carousel from './Carousel'
import AOS from 'aos'
import 'aos/dist/aos.css';
const Projects =  React.forwardRef((props, ref) => {

  AOS.init();
  const data = [
    {
      id: 1,
      title: 'Project name',
      img:'../assets/images/projects.png',
      disc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, enim tempora eveniet reiciendis quisquam rem perspiciatis. Nam, quibusdam veritatis laudantium exercitationem porro dicta perferendis unde omnis! Doloremque id placeat cumque.',
      code: '/',
      demo: '/',
    },
    {
      id: 2,
      title: 'Project name 2',
      disc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, enim tempora eveniet reiciendis quisquam rem perspiciatis. Nam, quibusdam veritatis laudantium exercitationem porro dicta perferendis unde omnis! Doloremque id placeat cumque.',
      code: '/',
      demo: '/',
    },
  ];
  return (

    <main className='flex-col lg:flex flex-1 items-center justify-center h-screen' ref={ref}>
      <div className='mt-50' data-aos="fade-up" data-aos-delay="200">
        <span className='text-white text-3xl lg:text-5xl items-center lg:ml-48 justify-center ml-28 mb-20 mt-30'>My Projects</span>
        <Carousel data={data}/>
      </div>
    </main>


    
  )
});

export default Projects