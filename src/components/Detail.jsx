import React from 'react'

export default function Detail(props) {
    const { showDetail, poke } = props;



    return (

        <div
            id="popup-modal"
            tabIndex={-1}
            className="overflow-y-auto pt-11 overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal  justify-center items-center flex "
            aria-modal="true"
            role="dialog"
        >
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                <div className="relative bg-yellow-200 rounded-lg shadow">

                    <div className="p-6 text-center relative -top-24 m-auto  ">

                        <img src={poke.img ?? './assets/Image_not_available.png'} alt="" className='m-auto w-48' />
                        <div className='flex justify-center items-center flex-wrap gap-3 mb-6'>
                            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Height:{poke.height && poke.height}</span>
                            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Weight:{poke.weight && poke.weight}</span>
                            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Candy Cound:{poke.candy_count && poke.candy_count}</span>
                            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Egg:{poke.egg && poke.egg}</span>
                        </div>

                        <span className="bg-gray-100 text-gray-800 text-base font-semibold mr-2  px-2.5 py-0.5 rounded ">Type</span>
                        <div className='flex justify-center py-3 '>
                            {poke.type.map((type, index) => (
                                <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ">{type}</span>
                            ))}

                        </div>
                        <span className="bg-gray-100 text-gray-800 text-base font-semibold mr-2 px-2.5 py-0.5 rounded">weaknesses</span>
                        <div className='flex justify-center items-center flex-wrap gap-3 my-3 '>
                            {poke.weaknesses.map((type, index) => (
                                <span key={index} className="bg-blue-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ">{type}</span>
                            ))}
                        </div>
                        <span className="bg-gray-100 text-gray-800 text-base font-semibold mr-2 px-2.5 py-0.5 rounded">Next Evolution</span>
                        <div className='flex justify-center items-center flex-wrap gap-3 my-3 '>
                            {poke.next_evolution && poke.next_evolution.map((type, index) => (
                                <div key={index}>
                                    <span className="bg-blue-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded" > {type.num}</span>
                                    <span className="bg-blue-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{type.name}</span>
                                </div>
                            ))}
                        </div>
                        <button className='relative -bottom-16 bg-red-600 px-4 py-2 rounded-2xl text-white' onClick={() => {
                            showDetail(false)
                            document.body.style.overflow = 'auto';
                        }}>Close</button>
                    </div>
                </div>
            </div>
        </div >



    )
}
