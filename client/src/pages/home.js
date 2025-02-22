import React from 'react'
import Navbar from '../components/navbar'
import SearchBar from '../components/searchbar'
import JobList from '../components/joblist'

function home() {
  return (
    <div>
      <Navbar />
      <SearchBar/>
      <JobList/>
    </div>
  )
}

export default home
