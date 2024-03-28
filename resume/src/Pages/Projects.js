

import React from 'react'
import Container from '../Layout/Container'
import GitHub from '@mui/icons-material/GitHub'

function Project({ imageUrl, githubUrl, liveDemoUrl }) {

    return (
        <div className=' bg-white w-56 h-72 rounded-2xl flex flex-col items-center justify-center hover:border-4  m-3'>
            <div className='bg-blue-300 m-3 self-stretch h-56'>
                <img className='w-full' src={imageUrl} />
            </div>
            <div className='flex flex-row mb-2'>

                {githubUrl != null && (
                    <>
                        <a href={githubUrl} className='m-1'>
                            <button className='p-2 border-2 hover:bg-slate-200 hover:shadow-xl rounded-3xl flex flex-row items-center'>
                                <GitHub />
                                <h1>Github</h1>
                            </button>
                        </a>
                    </>
                )}

                {liveDemoUrl != null && (
                    <>
                        <a href={liveDemoUrl} className='m-1'>
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
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                </div>
            </div>

        </Container>
    )
}
