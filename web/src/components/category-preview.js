import {Link} from 'gatsby'
import React from 'react'
import {cn, buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import BlockText from './block-text'
import heroImg from '../img/hero-img.png'


function CategoryPreview (props) {
  return (
    
    
    
    <Link to={`/${props.slug.current}`}>
     <div class=" shadow-2xl bg-brand">

<div class="relative overflow-hidden h-auto">
{props.mainImage && props.mainImage.asset && (
   <img className="w-full"
     src={imageUrlFor(buildImageObj(props.mainImage))
       .url()}
     alt={props.mainImage.alt}
   />
 )}
   <div class="text-center absolute mb-32 bottom-0 w-full mx-auto">
      <div class="mb-10">
         <span class="bg-blue  max-w-sm text-gray-100 px-5 py-5 font-bold uppercase">{props.title}</span>
         
         </div>
    
      <button class="bg-brand-accent text-gray-100 px-5 py-3 font-semibold shadow-xl rounded">Explore</button>
   </div>
</div>
</div>
      </Link>
  )
}

CategoryPreview.defaultProps = {
    
    _rawExcerpt: '',
    title: '',
    mainImage: 'heroImg'
  }

export default CategoryPreview
