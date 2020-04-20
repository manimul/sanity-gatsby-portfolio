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
      {props.mainImage && mainImage.asset && (
        <div className={"w-full md:w-3/5"}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      
        <div className={"w-full  md:w-2/5 pt-8 md:pt-0 md:px-8"}>
          <div className={styles.mainContent}>
            
          {categories.map(category => (
                    <p  className="inline-block bg-yellow-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2" key={category._id}>{category.title}</p>
                  ))}
                 
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={"py-6"}>
              
                <h3 className={"font-bold my-3 opacity-50 "}>Born</h3>
                <hr className={"py-1  max-w-2  border-t border-yellow-700"}></hr>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do YYYY')}
              </div>
            )}
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
