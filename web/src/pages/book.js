import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProfilePreviewGrid from '../components/profile-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Hero from '../components/hero'
import Cta from '../components/cta'
import CategoryPreviewGrid from '../components/category-preview-grid'
import {hero} from '../components/layout.module.css'
import {responsiveTitle1} from '../components/typography.module.css'
import heroImg from '../img/hero-img.png'
import FeaturedRow from '../components/featured-row'
import insideImg1 from '../img/book-inside1.png'
import insideImg2 from '../img/book-inside2.png'
import insideImg3 from '../img/book-inside3.png'
import insideImg4 from '../img/book-inside4.png'
import insideImg5 from '../img/book-inside5.png'
import insideImg6 from '../img/book-inside6.png'



export const query = graphql`
  query BookPageQuery {


    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      subtitle
      description
      keywords
      figure {asset {url}}
    }


        page: sanityPage(id: {eq: "a35e27f9-f0d9-51de-8c18-6365f7a7663e"}) {
        title
        pageModules {
       
      ... on SanityCta {
        _key
        _type
        title
        subtitle
        image {
          asset {
            url
            path
          }
          alt
        }
        buttonText
        flow
        buttonLink
      
      }
      ... on SanityHero {
        _key
        buttonLink
        buttonText
        flow
        subtitle
        body
        title
        image {
          asset {
            url
            path
          }
          caption
          alt
        }
       
      }
    }
  }
    profiles: allSanitySampleProfile(
      limit: 6
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
          categories{
            slug{current}
            title
          }
        }
      }
    }
  }
`

const BookPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const page = (data || {}).page
  const pageModules = page.pageModules.includes("SanityHero")
  
  const profileNodes = (data || {}).profiles
    ? mapEdgesToNodes(data.profiles)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    
 

    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container> 

    
        <Hero title={page.pageModules[0].title} subtitle={page.pageModules[0].subtitle} description={page.pageModules[0].body}  image={page.pageModules[0].image.asset.url}  buttonText={'Explore'}  />
    
<section id = "content_intro" className='w-full  pt-32'>
<h2 className='w-full text-center md:text-left pb-12'>Look Inside</h2>
    <div className='flex  flex-col md:flex-row'>
     
      <div className='w-full md:w-1/6 mx-1'><img src={insideImg1}/></div>
      <div className='w-full md:w-1/6 mx-1'><img src={insideImg2}/></div>
      <div className='w-full md:w-1/6 mx-1'><img src={insideImg3}/></div>
      <div className='w-full md:w-1/6 mx-1'><img src={insideImg4}/></div>
      <div className='w-full md:w-1/6 mx-1'><img src={insideImg5}/></div>
      <div className='w-full md:w-1/6 mx-1'><img src={insideImg6}/></div>
    </div>
</section>
        
        

<FeaturedRow></FeaturedRow>
<div className="py-6 md:py-16 md:px-16 flex flex-col ">
        <div className=" w-full"><p className="text-center md:text-left text-2xl font-bold ">You can buy the book here:</p></div>
        <div className="w-full flex  flex-col  pt-3">
        <div className="w-full text-center md:text-left mx-auto  md:p-0">
        <a href="https://whoswhoghana.com/order-the-book/" target="_blank" class="transition  duration-100 ease-in-out transform  hover:-translate-y-1  hover:scale-105  bg-brand-accent hover:opacity-75 text-white font-bold rounded-sm  shadow inline-block px-5 py-3 font-semibold">Our Online Store</a>
        </div>
        
        </div>

        </div>
     



</Container>
</Layout>
  )
}

export default BookPage
