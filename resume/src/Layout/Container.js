
import React from 'react'

export default function Container({ children }) {
    const containerColor = "bg-white md:bg-blue-300 lg:bg-red-300 xl:bg-yellow-300 2xl:bg-red-600"

    return (
        <div className='bg-white md:bg-blue-300 lg:bg-red-300 xl:bg-yellow-300 2xl:bg-red-600 
        w-full h-screen flex justify-center md:p-20'>
            <div className='bg-gray-500 rounded-xl shadow-2xl min-w-96 w-full 2xl:max-w-screen-xl 
                            h-full flex flex-col lg:flex-row justify-normal items-center'>
                {children}
            </div>
        </div>
    )
}
