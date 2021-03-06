import {Link} from 'gatsby'
import React from 'react'
import CategoryPreview from './category-preview'
import styles from './profile-preview-grid.module.css'



function CategoryPreviewGrid (props) {
  return (
   
    <div className="md:py-6 md:my-6" >
    
      {props.title && <h2 className={"text-center font-serif text-2xl md:text-5xl  md:py-4"}>{props.title}</h2>}
      <ul className="grid grid-cols-2 gap-4 mb-8">
        {props.nodes &&
          props.nodes.map(node => (
            <li className="" key={node.id}>
              <CategoryPreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={"uppercase  text-center md:text-right text-brand-accent"}>
          <Link to={props.browseMoreHref}>Explore All Categories</Link>
        </div>
      )}
    </div>
  )
}

CategoryPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default CategoryPreviewGrid
