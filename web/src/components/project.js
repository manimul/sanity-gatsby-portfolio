import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {Link} from 'gatsby'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'
import RoleList from './role-list'

import styles from './project.module.css'



function Project (props) {
  const {_rawBody, title, categories, mainImage, members, publishedAt, relatedProjects} = props
  return (
    <article className={"container mx-auto flex flex-wrap pt-4 pb-12 md:pt-8 sm:pt-2 px-8"}>
      <div className="flex-row w-full py-5">
      
      {categories.map(category => (
                    <p  className="w-full text-xl font-semibold text-brand-accent" key={category._id}>{category.title}</p>
                  ))}
      <h1 className="w-full text-5xl font-extrabold" >{title}</h1>
      <h2 className="w-full text-xl font-semibold" >{title}</h2>
      </div>
<div>
<div className="flex">

      {props.mainImage && mainImage.asset && (
        <div className={"w-1/2"}>
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
      
        <div className={"bg-white text-brand-dark w-1/2 p-12"}>
          <div >
          {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>

          </div>
          </div>

          <aside className={styles.metaContent}>
      
            {members && members.length > 0 && <RoleList items={members} title='Project members' />}
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
            {relatedProjects && relatedProjects.length > 0 && (
              <div>
                <h3 className={"font-bold my-3 opacity-50 "}>Related Profiles</h3>
                <hr className={"py-1  max-w-2  border-t border-yellow-700"}></hr>
                <ul>
                  {relatedProjects.map(project => (
                    <li key={`related_${project._id}`}>
                      {project.slug ? (
                        <Link to={`/project/${project.slug.current}`}>{project.title}</Link>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      
    </article>
  )
}

export default Project
