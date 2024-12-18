

import React from 'react'
import Container from '../Layout/Container'
import Intro from '../Intro'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function StackComp({ value }) {
    return (
        <div className='m-1 md:m-2 flex flex-row rounded-lg hover:shadow-lg'>
            <CheckCircleIcon />
            <div className='ml-1 hover:font-semibold' >{value}</div>
        </div>
    )
}


export default function Skills() {

    return (

        <Container>


{/* <div className='w-full h-full flex flex-col justify-start items-center mr-10 ml-10'>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mt-3 md:mt-10">Projects</h2>
                <div className=' w-full h-full flex flex-wrap justify-evenly pt-4 overflow-auto' > */}



            <div className='w-full h-full flex flex-col justify-center items-center mt-10 mr-10 ml-10 overflow-auto'>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-40 md:mt-10">What I know ?</h2>
                <h2 className="text-xl font-normal tracking-tight text-gray-900 sm:text-xl ">as a</h2>
                <h2 className="text-2xl font-normal tracking-tight text-gray-900 sm:text-2xl ">Full Stack developer</h2>

                <div className='flex flex-row items-stretch h-auto p-3'>

                    <div className='bg-white ml-3 mr-3 w-1/2 flex flex-col items-center justify-start rounded-xl border-2 p-4'>
                        <div className='text-xl font-semibold mb-3 '> Tech stack I use</div>
                        <div className='flex flex-wrap lg:justify-center'>
                            <StackComp value="HTML" />
                            <StackComp value="CSS" />
                            <StackComp value="Javascript" />
                            <StackComp value="Typescript" />
                            <StackComp value="Tailwind CSS" />
                            <StackComp value="React framework" />
                            <StackComp value="SQL" />
                            <StackComp value="MySQL" />
                            <StackComp value="Material design  (MUI) " />
                            <StackComp value="Framer Motion " />
                            <StackComp value="C# " />
                            <StackComp value="WPF " />
                        </div>

                    </div>
                    <div className='bg-white self-stretch mr-3 w-1/2 flex flex-col items-center justify-start  rounded-xl border-2  p-5'>
                        <div className='text-xl font-semibold mb-3'> Tools I'm comfortable with</div>
                        <div className=' flex flex-wrap lg:justify-center '>
                            <StackComp value="Visual Studio Code" />
                            <StackComp value="Git" />
                            <StackComp value="Github" />
                            <StackComp value="Notion" />
                            <StackComp value="Trello" />
                            <StackComp value="Visual Studio" />
                        </div>
                    </div>
                </div>

            </div>

        </Container>
    )
}