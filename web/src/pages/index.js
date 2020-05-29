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
import '../styles/global.css'
import Cta from '../components/cta'
import CtaSubscribe from '../components/cta-subscribe'
import CategoryPreviewGrid from '../components/category-preview-grid'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'
import {hero} from '../components/layout.module.css'
import {responsiveTitle1} from '../components/typography.module.css'
import heroImg from '../img/hero-img.png'




export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      subtitle
      description
      keywords
      figure {asset {url}}
    }
    
    categories: allSanityCategory(
      limit:2
    )
     {
    edges {
      node {
        id
        title
        description
        slug {
            current
          }
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
          name
          categories{
            title
            slug{
              current
            }
          }
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const profileNodes = (data || {}).profiles
    ? mapEdgesToNodes(data.profiles)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []
    const categoryNodes = (data || {}).categories
    ? mapEdgesToNodes(data.categories)
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
        <Hero title={site.title} subtitle={site.subtitle} description={site.description} image={heroImg} buttonText={'Explore'} />
        <section id="featured_partners ">
          <div className="py-32 px-16 flex flex-col md:flex-row">
          <div className="w-full md:w-1/5"><p className="text-center md:text-left text-2xl font-bold">As featured on:</p></div>
          <div className="w-full md:w-1/5  "><img src="https://via.placeholder.com/150x100"/></div>
          <div className="w-full md:w-1/5"><img src="https://via.placeholder.com/150x100"/></div>
          <div className="w-full md:w-1/5"><img src="https://via.placeholder.com/150x100"/></div>
          <div className="w-full md:w-1/5"><img src="https://via.placeholder.com/150x100"/></div>

          </div>
        </section>

        <section id="featured_categories">
          {categoryNodes && (
          <CategoryPreviewGrid
          title={"Category Spotlight"}
                      nodes={categoryNodes}
                      browseMoreHref='/categories/'

          />)}
        </section>

        <section id="book_promo">
          <Cta></Cta>
        </section>

        <section id="featured_profiles">
          {profileNodes && (
            <ProfilePreviewGrid
              title='Most Popular'
              nodes={profileNodes}
              browseMoreHref='/category/'
            />
          )}
        </section>
        
        <section id="subscribe_promo">    
          <CtaSubscribe></CtaSubscribe>
        </section>

      </Container>

    </Layout>

  )
}

export default IndexPage
