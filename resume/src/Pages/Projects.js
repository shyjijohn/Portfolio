

import React from 'react'
import Container from '../Layout/Container'
import GitHub from '@mui/icons-material/GitHub'

function Project({ title, imageUrl, githubUrl, liveDemoUrl }) {

    return (
        <div className=' bg-white w-56 h-80 rounded-2xl flex flex-col items-center justify-center hover:border-4  m-3'>
            <h1 className='self-start pl-4' >{title}</h1>
            <div className='bg-slate-100 rounded-2xl mx-3 m-1 self-stretch h-56'>
                <img className='w-full object-contain h-full p-1' src={imageUrl} />
            </div>
            <div className='flex flex-row mb-1'>

                {githubUrl != null && (
                    <>
                        <a href={githubUrl} target="_blank" className='m-1'>
                            <button className='p-2 border-2 hover:bg-slate-200 hover:shadow-xl rounded-3xl flex flex-row items-center'>
                                <GitHub />
                                <h1>Github</h1>
                            </button>
                        </a>
                    </>
                )}

                {liveDemoUrl != null && (
                    <>
                        <a href={liveDemoUrl} target="_blank" className='m-1'>
                            <button className='p-2 border-2 hover:bg-slate-200 hover:shadow-xl rounded-3xl flex flex-row items-center'>
                                <h1>Live Demo</h1>
                            </button>
                        </a>
                    </>
                )}
            </div>
        </div>
    )
}



export default function Projects() {
    return (
        <Container>
            <div className='w-full h-full flex flex-col justify-start items-center mr-10 ml-10'>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mt-3 md:mt-10">Projects</h2>
                <div className=' w-full h-full flex flex-wrap justify-evenly pt-4 overflow-auto' >
                    <Project title={"Rate grapher"} imageUrl={"images/RateGrapher.png"} githubUrl={"https://github.com/shyjijohn/Currency-Converter"} liveDemoUrl={"https://shyjijohn.github.io/Currency-Converter/"} />
                    <Project title={"Solar system"} imageUrl={"images/SolarSystem.png"} githubUrl={"https://github.com/shyjijohn/Solar-System"} liveDemoUrl={"https://shyjijohn.github.io/Solar-System/"} />
                    <Project title={"Google clone"} imageUrl={"images/Googleclone.png"} githubUrl={"https://github.com/shyjijohn/Google-Clone"} liveDemoUrl={"https://shyjijohn.github.io/Google-Clone/"} />
                    <Project title={"Amazon clone"} imageUrl={"images/Amazonclone.png"} githubUrl={"https://github.com/shyjijohn/Amazon"} liveDemoUrl={"https://shyjijohn.github.io/Amazon/"} />
                </div>
            </div>

        </Container>
    )
}
