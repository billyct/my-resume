import React from 'react'
import ReactMarkdown from 'react-markdown'

import me from '../me'

const Hello = () => (
  <div
    className='container mx-auto py-20'
  >
    <h2 className='text-4xl mb-4'>你好，</h2>
    <ReactMarkdown source={me.hello}/>
  </div>
)

export default Hello
