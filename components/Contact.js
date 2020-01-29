import React from 'react'
import ReactMarkdown from 'react-markdown'

import me from '../me'
import GithubSvg from '../svg/github.svg'

const {contacts, links} = me

const Contact = (props) => (
  <div {...props}>
    <dl className='leading-loose'>
      {contacts.map(contact => (
        <React.Fragment key={`contacts_${contact.key}`}>
          <dt className='float-left font-semibold opacity-50'>{contact.key}：</dt>
          <dd className='pl-32'>
            <ReactMarkdown source={contact.value}/>
          </dd>
        </React.Fragment>
      ))}
    </dl>

    <div className='mt-4'>
      <a
        href={links.github}
        target='_blank'
      >
        <GithubSvg
          className='opacity-50 w-5 h-5'
        />
      </a>
    </div>

  </div>
)

export default Contact
