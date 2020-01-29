import React from 'react'

import Header from '../components/Header'
import Hello from '../components/Hello'
import Resume from '../components/Resume'

const HomePage = () => (
  <div className='antialiased text-default'>
    <Header/>
    <Hello/>
    <div className='border-0 border-t'>
      <Resume/>
    </div>
  </div>
)

export default HomePage
