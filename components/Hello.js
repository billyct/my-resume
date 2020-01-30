import React from 'react'
import ReactMarkdown from 'react-markdown'

import DownloadSvg from '../svg/download.svg'

import me from '../me'

const Hello = () => (
  <div
    className='container mx-auto py-20'
  >
    <h2 className='text-4xl mb-4'>你好，</h2>
    <ReactMarkdown source={me.hello}/>

    <a
      href='/me.pdf'
      className='inline-block bg-primary text-white px-8 py-3 rounded-full no-underline shadow hover:shadow-lg mt-8'
      download
    >
      <DownloadSvg
        className='w-4 inline-block mr-2'
      />
      下载简历
    </a>
  </div>
)

export default Hello
