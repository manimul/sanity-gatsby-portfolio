import {Link} from 'gatsby'
import React from 'react'
import CategoryPreview from './category-preview'


function CategoryPreviewGrid (props) {
  return (
   
    <div >
      <hr className={"py-4 w-8 mx-auto border-t border-brand-accent"}></hr>
      {props.title && <h2 className={"uppercase text-2xl py-4"}>{props.title}</h2>}
      <ul className="flex flex-wrap ">
        {props.nodes &&
          props.nodes.map(node => (
            <li className="w-1/2" key={node.id}>
              <CategoryPreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={"uppercase text-right text-brand-accent"}>
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
