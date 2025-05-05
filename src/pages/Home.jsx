import React from 'react'
import Pitch from '../components/Pitch'
import MatchTimer from '../components/MatchTimer'

const Home = () => {
  return (
    <div className='bg-green-500'>
        <MatchTimer/>
        <Pitch/>
    </div>
  )
}

export default Home