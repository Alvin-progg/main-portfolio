import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6"; 
import { IoMdMail } from "react-icons/io";
import AOS from 'aos'
import 'aos/dist/aos.css';

import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


const Contacts = React.forwardRef((props, ref) => {

  AOS.init();
  return (
    <main className='h-screen flex-col flex-1 flex justify-center items-center px-4 lg:px-0' ref={ref}>
        <div className='flex flex-col   justify-center items-center text-white  ' data-aos="zoom-in">
            <div className='justify-center  items-center'>
              <span className='text-5xl lg:text-7xl ml-20 lg:ml-14 text white '>Lets Collab</span>
            <div className=' mt-20 ml-8 lg:ml-16  flex flex-row text-5xl gap-10 p-7'>
              <a href="https://www.facebook.com/alvin.sucke/" className='hover:text-gray-500'><FaSquareFacebook /></a><a className='hover:text-gray-500' href="mailto:albinoaloya@gmail.com"><IoMdMail /></a><a  className='hover:text-gray-500' href="https://github.com/Alvin-progg"><FaGithubSquare /></a><a  className='hover:text-gray-500' href="https://www.instagram.com/aloyaalvin/"><FaInstagramSquare /></a>
            </div>
          </div> 
        </div>
    </main>

  )
});

export default Contacts