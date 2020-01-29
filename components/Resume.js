import React from 'react'

import me from '../me'
import ResumeBlock from './ResumeBlock'

const {resumes} = me

const Resume = () => (
  <div
    className='container mx-auto py-20'
  >
    <h2 className='text-4xl mb-4'>简历，</h2>

    <div className='relative my-8 resume-list'>
      <style jsx>{`
      .resume-list {
        padding-left: 15px;
      }
      `}</style>

      {resumes.map(resume => (
        <ResumeBlock
          key={`resumes_${resume.title}`}
          {...resume}
        />
      ))}

    </div>


  </div>
)

export default Resume
