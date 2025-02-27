import React from 'react'
import { useState, useEffect} from 'react'
import Navbar from '../components/navbar'
import SearchBar from '../components/searchbar'
import JobList from '../components/joblist'

const Home = () => {

    // const [selectedCategory, setSelectedCategory] = useState(null);
    // const [jobs, setJobs] = useState([]);

    // useEffect(() => {
    //     fetch("jobs.json").then(res => res.json()).then(data => {
    //       // console.log(data)
    //       setJobs(data)
    //     }) 
    // }, []) 

    // console.log(jobs)
  
     const [searchTerm, setSearchTerm] = useState(""); 
      const handleInputChange = (event) => {
        setSearchTerm(event.target.value) 
      }

    // const filteredItems = jobs.filter((job) => job.tittle.toLoweCase().indexof(searchTerm.toLoweCase()) !== -1 )
    //  console.log(filteredItems)

  return (
    <div>
      <Navbar />
      <SearchBar searchTerm={searchTerm} handleInputChange={handleInputChange}/>
      <JobList/>
    </div>
  )
}

export default Home
