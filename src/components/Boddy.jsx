import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import Pais from './Pais'

function Boddy() {
    const [hotel, setHotel] = useState([])
    const [selectedCity, setSelectedCity] = useState('Whole, Finland');

    useEffect(() => {
        axios.get('./stays.json')
            .then(data => setHotel(data.data))
            .catch((error) => console.log(error))
            .finally(() => console.log('completed'))
    }, [])

    const handleCityClick = (city, country) => {
        setSelectedCity(`${city}, ${country}`);
      };
      
    return (
        <div className='flex flex-col justify-center p-10p p-3'>
            <div className='flex flex-col md:flex-row justify-between py-3 gap-8'>
                <div className='flex'>
                    <img className='h-8' src="./logo.beef9462.svg" alt="" />
                </div>
                <div className='flex border rounded-2xl'>
                    <button className='px-4 py-3' onClick={ocultarModal}>Whole, Finland</button>
                    <button className='px-4 py-3' onClick={ocultarModal}>Add guests</button>
                    <button className='px-4 py-3' onClick={ocultarModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div id='modal' className="fixed inset-0 flex justify-center overflow-y-auto overflow-x-hidden w-full h-[calc(100%-1rem)] max-h-full bg-slate-950 bg-opacity-50">
                <div className="relative p-4 w-full max-w-2xl">
                    <div className="flex flex-col rounded-md shadow h-3/4 bg-white p-4 gap-5">

                        <div className="flex items-center justify-between rounded-t">
                            <h3 className="flex text-center text-xl font-semibold text-black">
                                Edit your search
                            </h3>
                            <button onClick={ocultarModal}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </button>

                        </div>
                        <div className="search-wrapper relative z-0 inline-flex shadow-lg rounded-2xl w-full">
                            <label className="flex-col items-left w-full px-9 py-2 relative inline-flex border rounded-l-lg border-gray-200 border-opacity-70 bg-white text-gray-800 hover:text-gray-600  focus:border-blue-300 focus:outline-none active:bg-white" type="button">
                                <input type="radio" name='opt' className='peer hidden' />
                                <span className="font-extrabold mb-1">Location</span>
                                <div className="block">{selectedCity}</div>
                                <div className='absolute hidden top-20 peer-checked:block'>
                                    <ul className='flex flex-col gap-3'>
                                        <Pais
                                        handleCityClick = {handleCityClick}
                                        />
                                    </ul>
                                </div>
                            </label>
                            <label className=" flex-col items-left w-full px-9  relative inline-flex py-2 border border-gray-200 border-opacity-70 bg-white leading-5 text-gray-800  hover:text-gray-600  focus:border-blue-300 focus:outline-none active:bg-white" type="button">
                                <input type="radio" name='opt' className='peer hidden' />
                                <span className="font-extrabold mb-1">Guests</span>
                                <div className="text-gray-400">0</div>
                                <div className='absolute hidden top-20 peer-checked:block'>
                                    <h2>Cantidad</h2>
                                </div>


                            </label>
                            <button className="bg-red-500 bg-opacity-90 active:bg-primary active:bg-opacity-80 px-6 font-bold items-center w-3/12 relative inline-flex  py-2 border border-gray-200 border-opacity-70 text-gray-800  rounded-r-lg hover:text-gray-600  focus:border-blue-300 focus:outline-none active:bg-white" type="button">Search

                            </button>
                        </div>

                    </div>
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

function ocultarModal() {
    const modal = document.getElementById("modal");
    if (modal) {
        modal.classList.toggle("hidden");
    }
}
