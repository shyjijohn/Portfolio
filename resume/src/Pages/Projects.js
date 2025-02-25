import React from 'react'
import Container from '../Layout/Container'
import GitHub from '@mui/icons-material/GitHub'
import { Link } from "react-router-dom";
import CollectionsIcon from '@mui/icons-material/Collections';

function Project({ title, imageUrl, githubUrl, liveDemoUrl, notes, internalGalleryURL }) {

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
                                <h1 className='pl-1'>Github</h1>
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
                <div className='flex flex-col gap-0'>
                    {internalGalleryURL != null && (
                        <>
                            <Link to={internalGalleryURL}>
                                <button className='p-1 border-2 hover:bg-slate-200 hover:shadow-xl rounded-3xl flex flex-row items-center'>
                                    <CollectionsIcon />
                                    <h1 className='pl-2'> View Gallery</h1>
                                </button>
                            </Link>
                        </>
                    )}
                    <h6 className='mt-1 text-xs text-center'>{notes}</h6>
                </div>
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
                    <Project title={"Travel app"} imageUrl={"images/tourly/Andaman7.png"} internalGalleryURL={"/gallery"} notes={"* Under development 🚧"} images={['image1.png', 'image2.png', 'image3.png']} />
                    <Project title={"Gram Biller"} imageUrl={"images/gram_biller.png"} githubUrl={"https://github.com/shyjijohn/Gram-Biller"} liveDemoUrl={"https://shyjijohn.github.io/Gram-Biller/"} />
                    <Project title={"Rate grapher"} imageUrl={"images/RateGrapher.png"} githubUrl={"https://github.com/shyjijohn/Currency-Converter"} liveDemoUrl={"https://shyjijohn.github.io/Currency-Converter/"} />
                </div>
            </div>
        </Container>
    )
}