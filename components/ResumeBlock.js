import React from 'react'
import ReactMarkdown from 'react-markdown'

import tailwindConfig from '../tailwind.config'

const ResumeBlock = ({title, date, content}) => (
  <div className='block'>
    { /*language=CSS*/ }
    <style jsx>{`
    .block {
      border-left: 2px solid ${tailwindConfig.theme.colors.primary};
      padding-left: 25px;
      padding-bottom: 50px;
    }
    
    .block:before {
      width: 12px;
      height: 12px;
      border: 2px solid ${tailwindConfig.theme.colors.primary};
      position: absolute;
      content: "";
      border-radius: 50%;
      background-color: ${tailwindConfig.theme.colors.white};
      left: 10px;
    }  
    `}</style>

    <p className='text-primary font-semibold text-lg'>{title}</p>
    <p className='text-secondary text-sm'>{date}</p>

    <div className='mt-4'>
      <ReactMarkdown
        source={content}
        escapeHtml={false}
      />
    </div>
  </div>
)

export default ResumeBlock
