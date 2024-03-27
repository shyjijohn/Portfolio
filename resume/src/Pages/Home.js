

import React from 'react'
import Container from '../Layout/Container'
import Intro from '../Intro'

export default function Home() {

    return (
        <Container>
            <Intro/>
            <div className=''>
                <img src="images/resume.png" className='md:-ml-20 lg:-mt-20 lg:min-w-96 object-contain md:w-fit md:h-full' />
            </div>
        </Container>
    )
}

