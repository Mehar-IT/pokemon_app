import React, { useEffect, useState, useContext } from "react";
import { fetchData } from './api';
import Detail from "./Detail";
import pokemoneLogo from './assets/pokemon.png'
import InfiniteScroll from "react-infinite-scroll-component";
import './assets/splash.css'
import spinner from './assets/spinner.gif';

export default function FrontPage() {

  const [pokemone, setPokemone] = useState([])
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)
  const [poke, setPoke] = useState("")
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(20)
  const [totalLength, settotalLength] = useState(0)


  const loadData = async () => {
    const data = await fetchData();
    setTimeout(() => {
      settotalLength(data.length)
      setPokemone(data.slice(0, page))
      setLoading(true)
      setPage((prev) => prev + 20)
    }, 2000)

  }

  useEffect(() => {
    setTimeout(() => {
      loadData();
    }, 3000)
  }, [])

  const showDetail = (value) => {
    setShow(value)
    document.body.style.overflow = 'hidden';
  }

  return (
    <>
      {loading ? <div>
        <div className="flex items-center w-72 mx-auto pt-10 sticky top-0 ">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input

              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
              }}
              required
            />
          </div>
        </div>

        <InfiniteScroll
          dataLength={pokemone.length}
          next={loadData}
          hasMore={pokemone.length != totalLength}
          loader={<img className="mx-auto p-5" src={spinner} alt="spinner" />}
        >
          <div className=" container mx-auto py-10 px-5  sm:hidden grid grid-cols-2 gap-4">
            {/* {pokemone.filter(item => item.name.toLowerCase().includes(search)).map((poke, index) => { */}
            {pokemone.map((poke, index) => {
              if (poke.name.includes(search) || poke.name.toLowerCase().includes(search) || poke.name.toUpperCase().includes(search)) {
                return (

                  <div key={index} className=" bg-yellow-300 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img
                      className="rounded-t-lg m-auto"
                      src={poke.img ?? './assets/Image_not_available.png'}
                      alt="poke image"
                      onClick={() => {
                        setPoke(poke)
                        showDetail(true)
                      }}
                    />
                    <div className="p-5">
                      <h5 className="mb-2 text-xl sm:text-2xl sm:font-bold text-center tracking-tight text-gray-900 dark:text-white">
                        {poke.name}
                      </h5>
                    </div>
                  </div>
                )
              }
            })}
          </div>
          <div className="hidden container p-5 mx-auto sm:grid grid-cols-1 xl:grid-cols-2">

            {pokemone.map((poke, index) => {
              if (poke.name.includes(search) || poke.name.toLowerCase().includes(search) || poke.name.toUpperCase().includes(search)) {
                return (
                  <div key={index} className="flex flex-row bg-yellow-300 rounded-lg border shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-2">
                    <img className="object-contain w-96 ml-5 rounded-t-lg" src={poke.img ?? './assets/Image_not_available.png'} alt="" />
                    <div className="flex flex-col justify-center items-center p-4 space-y-4 w-full">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{poke.name}</h5>
                      <div className='flex flex-wrap justify-center items-center gap-2 '>
                        <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Height:{poke.height && poke.height}</span>
                        <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Weight:{poke.weight && poke.weight}</span>
                        <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Candy Cound:{poke.candy_count && poke.candy_count}</span>
                        <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Egg:{poke.egg && poke.egg}</span>
                      </div>
                      <div className='flex justify-center py-3 '>
                        <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2  px-2.5 py-0.5 rounded dark:bg-gray-700  dark:text-gray-300">Type :</span>
                        {poke.type.map((type, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{type}</span>
                        ))}

                      </div>
                      <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 ">weaknesses</span>
                      <div className='flex justify-center items-center flex-wrap gap-3 my-3 '>
                        {poke.weaknesses.map((type, index) => (
                          <span key={index} className="bg-blue-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{type}</span>
                        ))}
                      </div>
                      <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 ">Next Evolution</span>
                      <div className='flex justify-center items-center flex-wrap gap-3 my-3 '>
                        {poke.next_evolution && poke.next_evolution.map((type, index) => (
                          <div key={index}>
                            <span className="bg-blue-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800" > {type.num}</span>
                            <span className="bg-blue-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{type.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }
            })}
          </div>

          {show ? <Detail showDetail={showDetail} poke={poke} /> : null}
        </InfiniteScroll>
      </div > : <div className="h-screen w-screen bg-yellow-300 flex justify-center items-center"><img className="App-logo" src={pokemoneLogo} alt="poke splash" /></div>}
    </>
  );
}
