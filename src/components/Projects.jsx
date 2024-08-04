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
      <div className='' data-aos="fade-up" data-aos-delay="200">
        <Carousel data={data}/>
      </div>
    </main>


    
  )
});

export default Projects