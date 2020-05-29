import {Link} from 'gatsby'
import React from 'react'
import ProfilePreview from './profile-preview'

import styles from './profile-preview-grid.module.css'

function ProfilePreviewGrid (props) {
  return (
   
    <div className={"md:my-20"}>
      {props.title && <h2 className={"text-center font-serif text-2xl md:text-5xl  py-4"}>{props.title}</h2>}
      
      <ul className='flex flex-wrap flex-row'>
        {props.nodes &&
          props.nodes.map(node => (
            <li className='w-1/2 md:w-1/4 px-3' key={node.id}>
              <ProfilePreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={"my-6 uppercase text-center md:text-right text-brand-accent"}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  )
}

ProfilePreviewGrid.defaultProps = {
  title: '',
  name: '',
  nodes: [],
  browseMoreHref: ''
}

export default ProfilePreviewGrid
