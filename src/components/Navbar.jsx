import React , {useState} from 'react'
import { IoMdHome } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosBriefcase } from "react-icons/io";
import { BiSolidContact } from "react-icons/bi";
import { PiFinnTheHumanFill } from "react-icons/pi";
import { BsListNested } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";


const Navbar = ({ scrollToSection, homeRef, aboutRef, projectsRef, contactsRef}) => {

    const [showNav, setShowNav] = useState(false);
  return (
    <>
    <nav className="fixed top-0 left-0 h-full  flex-col justify-between w-20 py-10 ml-10 hidden lg:flex ">
        <a className='text-4xl text-white ' href="/"><PiFinnTheHumanFill /></a>
        <ul className=" text-3xl text-white relative   ">
            <li className="" >
                  <button onClick={()=> {scrollToSection(homeRef)}} ><IoMdHome /></button>
                </li >
            <li className=''>
                <button onClick={()=> {scrollToSection(aboutRef)}}><FaCircleUser /></button>
            </li >

             <li className=''>
                 <button onClick={()=> {scrollToSection(projectsRef)}} ><IoIosBriefcase /></button>
             </li>
              <li>
                 <button onClick={()=> {scrollToSection(contactsRef)}}><BiSolidContact /> </button>
            </li>
        </ul>
    </nav>

    {/*nav bar for phones/small screens */}

    <button className={'lg:hidden absolute top-10 right-10 text-4xl text-white '} onClick={()=>{ setShowNav(!showNav)}}>
        <BsListNested />
    </button>
    <nav className={`fixed top-0 right-0 h-full w-[200px] py-10 pl-5 lg:hidden bg-white ${showNav ? "block" : "hidden"} `}>

        <button className='text-5xl text-black' onClick={ ()=> { setShowNav(!showNav)}}><IoIosClose /></button>
        <div className='flex flex-col gap-6 mt-40'>

            <div>
                <button onClick={()=> {scrollToSection(homeRef)}}  className='flex items-center text-xl gap-2'>
                <IoMdHome />
                    Home
                </button>
            </div>
            <div>
                <button onClick={()=> {scrollToSection(aboutRef)}}  className='flex items-center text-xl gap-2'>
                <FaCircleUser />
                    About
                </button>
            </div>
            <div>
                <button onClick={()=> {scrollToSection(projectsRef)}}  className='flex items-center text-xl gap-2'>
                <IoIosBriefcase />
                    Projects
                </button>
            </div>
            <div>
                <button onClick={()=> {scrollToSection(contactsRef)}}  className='flex items-center text-xl gap-2'>
                <BiSolidContact />
                    Contact
                </button>
            </div>

        </div>


    
    </nav>

    </>
  )
}

export default Navbar