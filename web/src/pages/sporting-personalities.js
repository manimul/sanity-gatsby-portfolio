import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProfilePreviewGrid from '../components/profile-preview-grid'
import CategoryPageBlock from '../components/category-page-block'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../lib/helpers'
import {responsiveTitle1} from '../components/typography.module.css'

const categorySubtitle = "Who's Who in Ghana Presents"

export const query = graphql`
  query SportingPersonalitiesPageQuery {
    categories: sanityCategory(title: {eq: "Sporting Personalities"}) {
    id
    title
    slug {
      current
    }
    description
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
              url
            }
            alt
          }
  }
    profiles: allSanitySampleProfile(
      limit: 12
      sort: {fields: [publishedAt], order: DESC}
      filter: {categories: {elemMatch: {title: {eq: "Sporting Personalities"}}}}
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
const SportingPersonalitiesPage = props => {
  const {data, errors} = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
        
      </Layout>
    )
  }


  const profileNodes =
    data && data.profiles  &&  data.categories.title && mapEdgesToNodes(data.profiles).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
    <SEO title={data.categories.title} />
    <Container>

    {data.categories.title && categorySubtitle && data.categories.description && data.categories.mainImage.asset.url && profileNodes  && (
    <CategoryPageBlock 
     title={data.categories.title}
      subtitle={categorySubtitle}
      description={data.categories.description}
      image={data.categories.mainImage.asset.url}
      nodes={profileNodes} />)}

        
      </Container>
    </Layout>
  )
}

export default SportingPersonalitiesPage
