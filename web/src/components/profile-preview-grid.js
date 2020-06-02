import {Link} from 'gatsby'
import React from 'react'
import ProfilePreview from './profile-preview'

import styles from './profile-preview-grid.module.css'




function ProfilePreviewGrid (props, Items) {
  
  const items = props => {
    if (props.nodes.length === 0) {
      return "Loading..."
    }
    
    return props.nodes.slice(0, numItems)
    
  }

  return (


    <div className={(props.stack ? ' md:m-0' : ' md:m-20 ' )}>
      {props.title && !props.stack && <h2 className={"text-center font-serif text-2xl md:text-5xl  py-4"}>{props.title}</h2>}
      
      <ul className='flex flex-wrap flex-row'>
      

        {props.nodes && 
          props.nodes.slice(0, 8 ).map(node => (
            <li className={'w-1/2 ' + (props.stack ? ' md:w-full ' : ' md:w-1/4 px-3' )} key={node.id}>
              <ProfilePreview 
              {...node} 
              stack = {props.stack}
              />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && !props.stack && (
        <div className={"my-6 uppercase text-center md:text-right text-brand-accent"}>
          <button >Browse more</button>
        </div>
        
      )}
    
    </div>
  )
}

ProfilePreviewGrid.defaultProps = {
  title: '',
  name: '',
  nodes: [],
  showAmount: 2,
  browseMoreHref: '',
  flowType: '',
}

export default ProfilePreviewGrid
