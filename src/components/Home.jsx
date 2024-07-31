import React from 'react'
import Navbar from './Navbar'

const Home = () => {

    const scroll = (id) => {
        const sect = document.getElementById(id);


        if (sect) {
            sect.scrollIntoView({behavior:'smooth'});
        }
    }


  return (
    <main id='home' className='h-screen lg:flex-row flex-col'>
        <Navbar  scroll={scroll}/>
        <section className='flex flex-1 lg:px-0 px-4 items-center justify-center'></section>
    </main>
 
  )
}

export default Home