import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {Link} from 'gatsby'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'
import RoleList from './role-list'
import Cta from './cta'

import styles from './profile.module.css'





function Profile (props) {
  const {_rawBody, name, title, categories, mainImage,  publishedAt, relatedProfiles} = props
  return (
    <div id="profile-page" className={"container mx-auto flex flex-wrap pt-4 pb-12 md:pt-8 sm:pt-2"}>
      <section id="profile-bio">
      <div className="flex-row w-full py-5">
      
      {categories.map(category => (
        <Link  to={category.slug.current} >
                    <p  className="w-full text-lg uppercase font-semibold text-brand-accent" key={category._id}>{category.title}</p>
                    </Link>    ))} 
      <h1 className="w-full text-5xl font-serif" >{name}</h1>
      <h2 className="w-full text-lg uppercase opacity-50 font-light italic" >{title}</h2>
      </div>

<div className="flex flex-col md:flex-row ">

      {props.mainImage && mainImage.asset && (
        <div className="w-full md:w-2/5">
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 10) * 1200))
              .fit('crop')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      
        <div className={"bg-white text-brand-dark w-full md:w-2/5 p-12"}>
          <div id="content" >
          {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>

          </div>
          <div className={"text-brand-dark w-full ml-4 md:w-1/5 p-4 text-white"}>
           <h2 className='font-bold  border-b-2'>Explore Related Profiles</h2>
           <ul>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <ProfilePreview {...node} />
            </li>
          ))}
      </ul>
          </div>
          </div>
          </section>

          {/* <aside className={styles.metaContent}>
      
            
            {categories && categories.length > 0 && (
              <div>
              
              <h3 className={"font-bold my-3 opacity-50 "}>Categories</h3>
                <hr className={"py-1  max-w-2  border-t border-yellow-700"}></hr>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
            {relatedProfiles && relatedProfiles.length > 0 && (
              <div>
                <h3 className={"font-bold my-3 opacity-50 "}>Related Profiles</h3>
                <hr className={"py-1  max-w-2  border-t border-yellow-700"}></hr>
                <ul>
                  {relatedProfiles.map(profile => (
                    <li key={`related_${profile._id}`}>
                      {profile.slug ? (
                        <Link to={`/${profile.slug.current}`}>{profile.name}</Link>
                      ) : (
                        <span>{profile.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>*/
       }




     
         <section id="book_promo">
     <Cta></Cta>
   </section>
      
    </div>
    
  )
}

export default Profile
