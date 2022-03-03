import React from 'react'
import PaginationButtons from './PaginationButtons'

const SearchResult = ({ results }) => {
  return (
    <div className='mx-auto w-full px-3 sm:pl-[5%] md:pl-[15%] lg:pl-52'>
      <p className='text-gray-600 text-md mb-5 mt-3'>
        About {results.searchInformation?.formattedTotalResults} Results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => (
        <div key={result.link} className='max-w-xl mb-8'>
          <div className='group'>
            <a href={result.link} className='text-sm line-clamp-1'>
              {result.formattedUrl}
            </a>

            <a href={result.link}>
              <h2 className='truncate text-xl text-blue-800 font-medium group-hover:underline'>
                {result.title}
              </h2>
            </a>
          </div>

          <p className='line-clamp-2'>{result.snippet}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  )
}

export default SearchResult

// formattedSearchTime: '0.42'
// formattedTotalResults: '25,500'
// searchTime
