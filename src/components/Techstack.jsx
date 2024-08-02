
import React from 'react'

import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { FaLinux } from "react-icons/fa";
const Techstack = () => {

    const techs = [
        {
            id: 1,
            language: "HTML",
            icon: FaHtml5
        }, {
            id: 2,
            language: "CSS",
            icon: FaCss3
        }, {
            id: 3,
            language: "React",
            icon: FaReact
        }, {
            id: 4,
            language: "Node.js",
            icon: FaNodeJs
        }, {
            id: 5,
            language: "Git",
            icon: FaGitAlt
        }, 
        {
            id: 7,
            language: "MongoDB",
            icon: DiMongodb
        }, {
            id: 8,
            language: "Next.js",
            icon: RiNextjsFill
        }, {
            id: 9,
            language: "Linux",
            icon: FaLinux
        },
    ];
    
  return (
    <div className='flex gap-3'>
    {techs.map((tech) => (
        <div key={tech.id} className=' text-white relative text-3xl'>
            <tech.icon />

        </div>
    ))}
 </div>

  )
}

export default Techstack