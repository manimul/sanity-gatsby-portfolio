import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Hero from '../components/hero'
import Cta from '../components/cta'
import CategoryPreviewGrid from '../components/category-preview-grid'
import Footer from '../components/footer'
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
      limit:20
    )
     {
    edges {
      node {
        id
        title
        description
      }
    }
  }
    projects: allSanitySampleProject(
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
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
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
      <Hero title={site.title} subtitle={site.subtitle} image={heroImg} buttonText={'Show Me More'} />
        
          <section id="featured_profiles">
       
        {projectNodes && (
          <ProjectPreviewGrid
            title={"Recently Added"}
            nodes={projectNodes}
            browseMoreHref='/category/'
          />
        )}</section>

<Cta></Cta>
{projectNodes && (
<CategoryPreviewGrid
title={"Recently Added"}
            nodes={categoryNodes}
            browseMoreHref='/category/'

/>)}
          <section id="featured_news">
        {projectNodes && (
          <ProjectPreviewGrid
            title='Most Popular'
            nodes={projectNodes}
            browseMoreHref='/category/'
          />
        )}</section>
       
  <Cta></Cta>
  
</Container>

</Layout>

  )
}

export default IndexPage
