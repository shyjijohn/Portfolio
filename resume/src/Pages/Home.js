

import React from 'react'

export default function Home() {
    return (

        <div className=' w-3/4 h-screen p-20'>
            <div className='bg-gray-500 w-full h-full flex flex-row justify-between items-center'>
                <div className=' -mt-44 ml-40'>
                    <div className="text-3xl font-light self-start mb-4">HELLO</div>
                    <div className="text-2xl font-light self-start">I'm   
                        <span className='whitespace-nowrap text-6xl '> SHYJI JOHN</span>
                    </div>
                    <div className="flex flex-col">
                        <div className="self-end text-2xl font-light mt-2">Aspiring</div>
                        <div className="self-start text-4xl font-light mt-4">Frontend developer</div>
                    </div>
                </div>
                <div className=''>
                     <img  src="images/resume.png" className='-ml-20 -mt-20 w-full h-full'/>
                </div>
            </div>
        </div>
    )
}

