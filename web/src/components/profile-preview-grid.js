import {Link} from 'gatsby'
import React from 'react'
import ProfilePreview from './profile-preview'

import styles from './profile-preview-grid.module.css'

function ProfilePreviewGrid (props) {
  return (
   
    <div className={"my-20"}>
      {props.title && <h2 className={"text-center  text-4xl font-bold py-4"}>{props.title}</h2>}
      
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <ProfilePreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={"uppercase text-right text-brand-accent"}>
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
