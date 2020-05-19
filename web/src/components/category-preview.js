import {Link} from 'gatsby'
import React from 'react'
import {cn, buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import BlockText from './block-text'
import heroImg from '../img/hero-img.png'


function CategoryPreview (props) {
  return (
    <Link to={`/project/${props.title}`}>
      <div className={"max-w-sm  rounded overflow-hidden shadow-2xl bg-brand"}>
        
        
        <img className="w-full"
            src={props.mainImage}
        
          />
       
      <div className={"px-4 py-4 "}>
      
      <h3 className={"font-bold text-sm mb-1 uppercase"}>{props.title}</h3>
      {props._rawExcerpt && (
        <div className={"text-xs mb-1 text-gray-500"}>
          <BlockText blocks={props._rawExcerpt} />
        </div>
        
      )}
      <div className={"text-xs mb-1 text-gray-500"}>
          
        </div>
      </div>
      </div>
      </Link>
  )
}

CategoryPreview.defaultProps = {
    mainImage: heroImg,
    _rawExcerpt: '',
    title: ''
  }

export default CategoryPreview
