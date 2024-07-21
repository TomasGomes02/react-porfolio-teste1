import React from 'react'
import ProjectItem from './ProjectItem'
import oneImg from '../assets/1.png'
import twoImg from '../assets/2.png'
import threeImg from '../assets/3.jpg'
import fourImg from '../assets/4.jpg'

function Projects() {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam aperiam incidunt libero sapiente tempore dolore accusantium, corrupti doloremque quo. Ullam nesciunt dicta aliquid id placeat repellat autem laboriosam necessitatibus? Est!
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={oneImg} title='Prj 1'/>
            <ProjectItem img={twoImg} title='Prj 2'/>
            <ProjectItem img={threeImg} title='Prj 3'/>
            <ProjectItem img={fourImg} title='Prj 4'/>
        </div>
    </div>
  );
};

export default Projects