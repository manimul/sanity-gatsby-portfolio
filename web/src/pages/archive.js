import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProfilePreviewGrid from '../components/profile-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../lib/helpers'

import {responsiveTitle1} from '../components/typography.module.css'

export const query = graphql`
  query ArchivePageQuery {
    profiles: allSanitySampleProfile(
      limit: 12
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

const ArchivePage = props => {
  const {data, errors} = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const profileNodes =
    data && data.profiles && mapEdgesToNodes(data.profiles).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <SEO title='Ghanas Most Influential' />
      <Container>
        <h1 className={responsiveTitle1}>Ghana's Most Influential</h1>
        {profileNodes && profileNodes.length > 0 && <ProfilePreviewGrid nodes={profileNodes} />}
      </Container>
    </Layout>
  )
}

export default ArchivePage
