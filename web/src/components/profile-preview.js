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


    <Link className={styles.root} to={`/${slug}`}>
      <div className={"max-w-sm   transition duration-100 ease-in-out  hover:-translate-y-1 transform hover:scale-105 rounded overflow-hidden shadow bg-brand"}>
      <div className={"px-4 py-1 bg-brand-lighter text-center "}>
      
      <p className={"text-base font-bold tracking-wide "}>{props.categories[0].title}</p>
      </div>
        {props.mainImage && props.mainImage.asset && (
          <img className="w-full opacity-75 hover:opacity-100"
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      <div className={"px-4 py-4 text-center "}>
      
      <h3 className={"text-base  font-serif tracking-wide "}>{props.name}</h3>
    
      <div className={"text-sm  opacity-50 uppercase font-semibold italic"}>{props.title} </div>
      </div>
      </div>
    </Link>
  )
}

export default ProfilePreview
