import React from 'react'

function Boddy() {
    return (
        <div className='flex flex-col justify-center p-3'>
            <div className='flex justify-between px-10'>
                <div className='flex'>
                    <img className='h-8' src="./logo.beef9462.svg" alt="" />
                </div>
                <div className='flex border rounded-2xl'>
                    <button className='px-4 py-3'>Whole, Finland</button>
                    <button className='px-4 py-3'>Add guests</button>
                    <button className='px-4 py-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className='flex px-10 p-3'>
                <h2 className='font-bold text-2xl'>Stays in Finland</h2>
            </div>
        </div>
    )
}

export default Boddy
