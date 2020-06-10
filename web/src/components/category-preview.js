import {Link} from 'gatsby'
import React from 'react'
import {cn, buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import BlockText from './block-text'
import heroImg from '../img/hero-img.png'


function CategoryPreview (props) {
  return (
    
    
    
    <Link to={`/${props.slug.current}`}>
     <div class="transition duration-100 ease-in-out  group hover:-translate-y-1 transform hover:translate-y-1 rounded overflow-hidden shadow bg-brand">

<div class="relative overflow-hidden h-auto">
{props.mainImage && props.mainImage.asset && (
   <img className="w-full opacity-75 hover:opacity-100"
     src={imageUrlFor(buildImageObj(props.mainImage))
       .url()}
     alt={props.mainImage.alt}
   />
 )}
   <div class="text-center absolute opacity-75 group-hover:opacity-100  bottom-0  w-full mx-auto">
      <div class="bg-brand mx-auto align-middle	w-full p-1 md:p-8  group-hover:opacity-100 flex flex-col text-center  ">
         <h2 class="text-center text-xs md:text-xl  font-luxia font-bold uppercase">{props.title}</h2>
         <a href="" class="transition text-xs  md:text-base text-blue-accent duration-100 ease-in-out transform   group-hover:-translate-y-1  group-hover:scale-105  ">Explore</a>

         </div>
    
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
