import React from 'react'

const AiSearchPage = () => {
    return (
        <div className="flex flex-col w-screen pt-32 justify-center items-center">
            <input
                type="email"
                className="p-2 border border-gray-300 rounded-lg mb-8 w-[600px] text-white placeholder-white-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="What would you like to watch today?"
            />
            <button className="bg-red-700 p-2 rounded-md text-white mr-4 text-lg w-24 font-bold cursor-pointer">
                Search
            </button>
        </div>
    )
}

export default AiSearchPage
