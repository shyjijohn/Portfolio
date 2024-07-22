

import React from 'react'
import Container from '../Layout/Container'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


export default function Contact() {
    return (
        <Container>
            <div className=' h-full flex flex-col justify-between'>
                <div className=' flex-grow flex flex-col justify-center items-center p-5 self-center '>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 mt-3 ">Contact me</h2>
                    <h2 className="text-xl font-normal tracking-tight text-gray-900 mt-5 ">Let's build something amazing together!</h2>
                    <h2 className="text-xl font-normal tracking-tight text-gray-900 ">Reach out to discuss your next project or just to say hi</h2>
                    <div className='bg-white border-2 rounded-2xl p-5 mt-10 flex flex-col items-start justify-start'>

                        <div className='m-3  flex flex-row'>
                            <MailIcon className='mr-3 scale-150' />
                            <a className='hover:underline hover:font-semibold mr-3' href="mailto:shyjijohn90@gmail.com">Shyjijohn90@gmail.com</a>
                            {/* <ContentCopyIcon /> */}
                        </div>
                        <div className='m-3  flex flex-row'>
                            <LinkedInIcon className='mr-3 scale-150' />

                            <a className='hover:underline hover:font-semibold mr-3' href="https://www.linkedin.com/in/shyji90">linkedin.com/in/shyji90</a>
                        </div>
                    </div>
                </div>
                <h2 className="text-md mb-1 self-center font-normal tracking-tight text-gray-900 ">Copyright © 2024 Shyji John. All Rights Reserved.</h2>
            </div>
        </Container>
    )
}
