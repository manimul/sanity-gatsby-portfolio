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
  query MediaPersonalitiesPageQuery {
    categories: sanityCategory(id: {eq: "2243b0bb-9899-55bc-a77b-87a7ecd6af64"}) {
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
      filter: {categories: {elemMatch: {id: {eq: "2243b0bb-9899-55bc-a77b-87a7ecd6af64"}}}}
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
const MediaPersonalitiesPage = props => {
  const {data, errors} = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }


  const profileNodes =
    data && data.profiles  && mapEdgesToNodes(data.profiles).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <SEO title={data.categories.title} />
      <Container>


        {profileNodes && profileNodes.length > 0 && <CategoryPageBlock 
       title={data.categories.title}
        subtitle={categorySubtitle}
        description={data.categories.description}
        image={data.categories.mainImage.asset.url}
        nodes={profileNodes} />}

        
      </Container>
    </Layout>
  )
}

export default MediaPersonalitiesPage
