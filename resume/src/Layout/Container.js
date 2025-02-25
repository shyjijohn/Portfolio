
import React from 'react'

export default function Container({ children }) {
    return (
        <div className="w-full min-h-screen flex justify-center p-0 lg:p-20 overflow-x-hidden border-b-4 lg:border-0">
            <div className="bg-gray-100 rounded-none lg:rounded-xl shadow-2xl min-w-96 w-full max-w-full 2xl:max-w-screen-xl 
                        flex flex-col lg:flex-row justify-center items-center flex-grow">
                {children}
            </div>
        </div>


        // <div className="w-full min-h-screen flex justify-center p-0 lg:p-20 overflow-x-hidden">
        //     <div className="bg-gray-100 rounded-none lg:rounded-xl shadow-2xl min-w-0 w-full max-w-full 2xl:max-w-screen-xl 
        //                     flex flex-col lg:flex-row justify-center items-center flex-grow">
        //         {children}
        //     </div>
        // </div>
    )
}
