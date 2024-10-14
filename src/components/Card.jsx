import React from 'react'

function Card({ image: { photo, city, title, type, beds, rating, superHost } }) {
    return (
        <div>
            <div className='flex h-60 rounded-md overflow-hidden'>
                <img className='w-full object-cover' src={`${photo}`} alt={city} />
            </div>
            <div className='flex justify-between py-3'>
                <div>{!superHost ? false : <span className='border border-black p-1 rounded-md font-bold'>Super Host</span>} {`${type}`}. {!beds ? null : `${beds}`} beds</div>
                <div className='flex'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 fill-orange-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                </span>{`${rating}`}</div>
            </div>
            <div className='font-bold text-lg'>{`${title}`}</div>
        </div>
    )
}

export default Card
