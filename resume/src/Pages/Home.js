

import React from 'react'
import Container from '../Layout/Container'
import Intro from '../Intro'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Home() {

    return (
        <Container>
            <Intro />
            <div className=' flex flex-col h-full w-full justify-between overflow-hidden'>
                <div className=' self-start w-full h-5/6 flex flex-col justify-center'>
                    <img src="images/resume.png" className='lg:min-w-96 object-cover max-h-full' />
                </div>
                <div className='self-end pr-20 pb-5'>
                    <GitHubIcon className='mr-3' />
                    <LinkedInIcon />
                </div>
            </div>


        </Container>
    )
}

