

import React from 'react'
import Container from '../Layout/Container'
import Intro from '../Intro'
export default function Skills() {

    return (

        <Container>
            <div className=' w-full h-full flex flex-col items-center justify-center'>
                <div className=''>
                    <div className='text-xl font-semibold italic underline mb-3'> Tech stack I use</div>
                    <ul>
                        <li > HTML</li>
                        <li > CSS</li>
                        <li > Javascript</li>
                        <li > Tailwind CSS</li>
                        <li > React framework</li>
                        <li > SQL</li>
                        <li > Material design (MUI)</li>
                    </ul>
                </div>
            </div>
            <div className=' w-full h-full flex flex-col items-center justify-center'>
                <div className=''>
                    <div className='text-xl font-semibold italic underline mb-3'> Tools I'm comfortable with</div>
                    <ul>
                        <li > Visual studio code</li>
                        <li > Git</li>
                        <li > Github</li>
                        <li > Notion</li>
                        <li > Trello</li>
                    </ul>
                </div>
            </div>

            {/* <Intro />
            <div className=''>
                <img src="images/resume.png" className='md:-ml-20 lg:-mt-20 lg:min-w-96 object-contain md:w-fit md:h-full' />
            </div> */}
        </Container>
    )
}