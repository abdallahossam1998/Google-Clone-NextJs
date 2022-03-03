import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Response from '../Response'
import { useRouter } from 'next/router'
import { API_KEY, CONTEXT_KEY } from '../keys'
import SearchResult from '../components/SearchResult'

const Search = ({ results }) => {
  const router = useRouter()
  console.log(results)
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <meta name='description' content='Google' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* Header */}
      <Header />
      {/* Header */}
      
      {/* Search Results */}
      <SearchResult results={results} />
      {/* Search Results */}
    </div>
  )
}

export default Search

export async function getServerSideProps(context) {
  const useDummyData = false
  const startIndex = context.query.start || '0'

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json())

  return {
    props: {
      results: data,
    },
  }
}
