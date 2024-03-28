

import React from 'react'
import Container from '../Layout/Container'
import Intro from '../Intro'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

function ButtonWithIcon({ children, link }) {
    return (
        <a href={link}>
            <button className='p-1 mr-3 hover:bg-slate-200 hover:shadow-xl rounded-3xl'>
                {children}
            </button>
        </a>
    )
}

export default function Home() {

    return (
        <Container>
            <Intro />
            <div className=' flex flex-col h-full w-full justify-between overflow-hidden'>
                <div className=' self-start w-full h-5/6 flex flex-col justify-start'>
                    <img src="images/resume.png" className='wiggle object-cover w-[850px] h-[700px]' />
                </div>
                <div className='self-end pr-20 pb-5'>

                    <ButtonWithIcon link={"mailto:Shyjijohn90@gmail.com"}>
                        <MailIcon />
                    </ButtonWithIcon>
                    <ButtonWithIcon link={"https://github.com/shyjijohn"}>
                        <GitHubIcon />
                    </ButtonWithIcon>
                    <ButtonWithIcon link={"https://www.linkedin.com/in/shyji90"}>
                        <LinkedInIcon />
                    </ButtonWithIcon>
                </div>
            </div>
        </Container>
    )
}

