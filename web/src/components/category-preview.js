import {Link} from 'gatsby'
import React from 'react'
import {cn, buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import BlockText from './block-text'
import heroImg from '../img/hero-img.png'


function CategoryPreview (props) {
  return (
    
    
    
    <Link to={`/${props.slug.current}`}>
     <div class="transition duration-100 ease-in-out  hover:-translate-y-1 transform hover:translate-y-1 rounded overflow-hidden shadow bg-brand">

<div class="relative overflow-hidden h-auto">
{props.mainImage && props.mainImage.asset && (
   <img className="w-full opacity-75 hover:opacity-100"
     src={imageUrlFor(buildImageObj(props.mainImage))
       .url()}
     alt={props.mainImage.alt}
   />
 )}
   <div class="text-center absolute mb-32 bottom-0 w-full mx-auto">
      <div class="mb-10">
         <span class="bg-blue  max-w-sm text-gray-100 px-5 py-5 font-bold uppercase">{props.title}</span>
         
         </div>
    
      <button class="transition duration-100 ease-in-out transform  hover:-translate-y-1  hover:scale-105  bg-brand-accent  text-white font-bold rounded-sm  shadow inline-block px-5 py-3   px-5 py-3   rounded">Explore</button>
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
