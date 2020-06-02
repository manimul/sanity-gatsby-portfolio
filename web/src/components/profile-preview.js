import {Link} from 'gatsby'
import React from 'react'
import {cn, buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import BlockText from './block-text'

import styles from './profile-preview.module.css'
import {responsiveTitle3} from './typography.module.css'

function ProfilePreview (props) {
 
  let slug = props.categories[0].slug.current + `/` + props.slug.current


  return (


    <Link  to={`/${slug}`}>
      <div className={" flex  transition duration-100 ease-in-out  hover:-translate-y-1 transform hover:scale-105 rounded overflow-hidden shadow bg-brand " + (props.stack ? ' flex-row h-16 p-1 justify-center items-center' : ' flex-col' )}>
      {props.categories[0].title && !props.stack && <div className={"px-4 py-1 bg-brand-lighter text-center "}>
      
       <p className={"text-base font-bold tracking-wide "}>{props.categories[0].title}</p>
      </div>}
        {props.mainImage && props.mainImage.asset && !props.stack &&  (
          <div className={(props.stack ? '  w-1/4 ' : ' w-full' )}>
          <img className={"opacity-75 hover:opacity-100 w-full"+ (props.stack ? ' rounded-full' : 'rounded-none ' )}
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
          />
          </div>
        )}
         {props.mainImage && props.mainImage.asset && props.stack &&  (
          <div className={(props.stack ? '  w-1/4 ' : ' w-full' )}>
          <img className={"opacity-75 hover:opacity-100 w-full"+ (props.stack ? ' rounded-full' : 'rounded-none ' )}
            src={imageUrlFor(buildImageObj(props.mainImage))
              
              
              .url()}
            alt={props.mainImage.alt}
          />
          </div>
        )}
      <div className={(props.stack ? ' w-3/4 text-left px-2 ' : ' w-full text-center px-4 py-4 ' )}>
      
      <h3 className={"text-sm  font-serif md:tracking-wide "+ (props.stack ? ' md:text-sm' : ' md:text-base' )}>{props.name}</h3>
    
      {!props.stack && <div className={"hidden md:block text-sm  opacity-50 uppercase font-semibold italic"+ (props.stack ? ' md:text-xs ' : ' md:text-sm' )}>{props.title} </div>}
      </div>
      </div>
    </Link>
  )
}

export default ProfilePreview
