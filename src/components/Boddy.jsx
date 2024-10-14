import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'

function Boddy() {
    const [hotel, setHotel] = useState([])

    useEffect(() => {
        axios.get('./stays.json')
            .then(data => setHotel(data.data))
            .catch((error) => console.log(error))
            .finally(() => console.log('completed'))
    }, [])
    console.log(hotel)

    return (
        <div className='flex flex-col justify-center md:px-96 p-3'>
            <div className='flex flex-col md:flex-row justify-between py-3 gap-8'>
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
            
            <div className='flex justify-between py-3'>
                <h2 className='font-bold text-2xl'>Stays in Finland</h2>
                <h2 className=' text-lg'>12+ stays</h2>
            </div>
            <div className='flex align-center justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-3 py-6 gap-16'>

                    {
                        hotel &&
                        hotel.map((rs) =>
                            <Card key={rs.id} image={rs} />
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Boddy
