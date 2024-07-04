

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
                    <div class="vapour bg-red-500 h-4 w-4">
                         <span class="--i:1;"></span>
                         <span class="--i:3;"></span>
                         <span class="--i:5;"></span>
                         <span class="--i:16;"></span>
                         <span class="--i:12;"></span>
                         <span class="--i:11;"></span>
                         <span class="--i:2;"></span>
                         <span class="--i:9;"></span>
                         <span class="--i:7;"></span>
                         <span class="--i:17;"></span>
                         <span class="--i:4;"></span>
                         <span class="--i:15;"></span>
                         <span class="--i:18;"></span>
                         <span class="--i:19;"></span>
                         <span class="--i:6;"></span>
                         <span class="--i:20;"></span>
                         <span class="--i:8;"></span>
                         <span class="--i:10;"></span>
                         <span class="--i:13;"></span>
                         <span class="--i:14;"></span>
                    </div>

                    {/* <div class="relative">
                        <div class="absolute w-4 h-4 bg-blue-500 rounded-full -top-2 left-4 animate-ping"></div>
                        <div class="absolute w-6 h-6 bg-red-400 rounded-full -top-2 left-8 animate-ping"></div>
                        <div class="absolute w-8 h-8 bg-gray-500 rounded-full -top-2 left-12 animate-ping"></div>
                    </div> */}
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

