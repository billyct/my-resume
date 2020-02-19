import React from 'react'

import tailwindConfig from '../tailwind.config'
import Contact from './Contact'

const Header = () => (
  <div
    className='header'
  >
    { /*language=CSS*/ }
    <style jsx>{`
    .header {
      background: linear-gradient(54deg, ${tailwindConfig.theme.colors.primary} 34%, #E3EBD7);
    }
    
    .avatar {
      top: 10px;
    }
    `}</style>

    <div className='flex text-white container mx-auto py-20'>
      <div className='relative w-64 hidden md:block mr-8'>
        <img
          className='w-64 bg-white shadow-lg absolute avatar'
          src='/img/avatar.jpg'
        />
      </div>

      <div>
        <p className='text-4xl font-semibold'>
          卢仡，
        </p>
        <p className='text-lg mt-4'>
          全干工程师 😂
        </p>


        <Contact className='mt-8'/>
      </div>
    </div>

  </div>
)

export default Header
