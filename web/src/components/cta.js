import {Link} from 'gatsby'
import React from 'react'
import heroImg from '../img/hero-img.png'
import bookImg from '../img/book-cover.png'
import { graphql } from "gatsby"
import {StaticQuery} from 'gatsby'

import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../lib/helpers'





export default  ()=> (
  <StaticQuery 
  query={graphql`
  query CtaQuery {
  ctas: allSanityCtas 
  {
  edges {
    node {
      _id
      title
      subtitle
      buttonLink
      buttonText
      body
      type
      image {
        asset {
          url
        }
      }
    }
  }
}
}
 ` }
  
  render={data => (


    <div className="my-16 md:my-32 text-base md:px-16 lg:justify-center">
    <div className="bg-cta py-8 bg-fixed md:mx-8 flex flex-col md:flex-row shadow rounded-lg">
        <div className="w-full md:w-1/2">
             <img src={data.ctas.edges[0].node.image.asset.url} className="w-auto -mt-24  md:absolute md:-mt-32 md:w-2/7" />
        </div>
        <div className="pb-6 px-6 md:py-12 md:pr-24 text-center md:text-left w-full md:w-1/2">
            
  <h2 className="leading-snug text-xl md:text-4xl font-bold ">{data.ctas.edges[0].node.title}</h2>
            <p className="my-4 md:mb-8   block">{data.ctas.edges[0].node.body}</p>
            <a href={data.ctas.edges[0].node.buttonLink} className="transition duration-100 ease-in-out transform  hover:-translate-y-1  hover:scale-105  bg-brand-accent hover:opacity-75 text-white font-bold rounded-sm  shadow inline-block px-5 py-3 font-semibold ">{data.ctas.edges[0].node.buttonText}</a>

            
            
        </div>
    </div>
</div>
)}
/>
    
);



  
  