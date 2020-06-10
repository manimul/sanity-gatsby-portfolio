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

    
        <Hero title={page.pageModules[0].title} subtitle={page.pageModules[0].subtitle} description={page.pageModules[0].body}  image={page.pageModules[0].image.asset.url}  buttonText={'Buy the Book'}  />
    
<section id = "image-gallery" className='w-1/2'>
<h2 className='w-full'>Look Inside</h2>
    <div className='flex  flex-col md:flex-row'>
     
      <div className='w-full md:w-1/4'><img src="https://via.placeholder.com/150x100"/></div>
      <div className='w-full md:w-1/4'><img src="https://via.placeholder.com/150x100"/></div>
      <div className='w-full md:w-1/4'><img src="https://via.placeholder.com/150x100"/></div>
      <div className='w-full md:w-1/4'><img src="https://via.placeholder.com/150x100"/></div>
    </div>
</section>
        

<FeaturedRow></FeaturedRow>



</Container>
</Layout>
  )
}

export default BookPage
