import React , {useRef }from 'react'
import Navbar from './Navbar'
import Logo from '../assets/images/pfp.jpg'

import Typed from 'typed.js'



const Home = React.forwardRef((props, ref) => {


 


    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Android Developer.', 'Web developer.'],
        typeSpeed: 100,
        loop: true,
        
        backDelay: 5000,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);





  return (

    <main id='home' className='h-screen lg:flex-row flex-col  ' ref={ref}>
        
        <section className='flex flex-1 lg:px-0 px-4 items-center justify-center '>

          <div>
            <div className=" flex flex-col justify-center items-center text-center gap-7 mt-72 lg:mt-20   ">
              <img src={Logo}alt="pfp" height={500} className='lg:size-52  rounded-full size-52' />
              <h1 className='text-gray-500 text-4xl'>Alvin-<span className='text-white'>Progg</span></h1>
              <p className='text-2xl text-gray-500'>Im a <span className='text-white' ref={el}></span></p>
  

            </div>
            

          </div>

        </section>
    </main>
  )
});

export default Home