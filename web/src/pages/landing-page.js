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



export const query = graphql`
  query LandingPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      subtitle
      description
      keywords
      figure {asset {url}}
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
        }
      }
    }
  }
`

const LandingPage = props => {
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

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container> 
      <Hero title={site.title} subtitle={site.subtitle} image={heroImg} buttonText={'Show Me More'} />
        
          <section id="featured_profiles">
       
        {profileNodes && (
          <ProfilePreviewGrid
            title={"Recently Added"}
            nodes={profileNodes}
            browseMoreHref='/category/'
          />
        )}</section>

<Cta></Cta>
{profileNodes && (
<CategoryPreviewGrid></CategoryPreviewGrid>)}

          <section id="featured_news">
        {profileNodes && (
          <ProfilePreviewGrid
            title='Most Popular'
            nodes={profileNodes}
            browseMoreHref='/category/'
          />
        )}</section>
       
  <Cta></Cta>
</Container>
</Layout>
  )
}

export default LandingPage
