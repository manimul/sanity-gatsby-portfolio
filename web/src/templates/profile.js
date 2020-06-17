import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Profile from '../components/profile'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query ProfileTemplateQuery($id: String!, $cat: String!) {
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

    
    related: allSanitySampleProfile(
      limit: 6
      sort: {fields: [publishedAt], order: DESC}
      filter: {categories: {elemMatch: {slug: {current: {eq: $cat}}}}, id: {ne: $id}}
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


    sampleProfile: sanitySampleProfile(id: {eq: $id}) {
      id
      publishedAt
      categories {
        _id
        title
        slug{current}
      }
      relatedProfiles {
        title
        _id
        slug {
          current
        }
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
          url
        }
        alt
      }
      title
      name
      slug {
        current
      }
      _rawBody
      
    }
  }
`

const ProfileTemplate = props => {
  const {data, errors} = props
  const profile = data && data.sampleProfile 
  const relatedProfiles = data && data.related
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {profile && <SEO title={profile.name || 'Untitled'} description={profile._rawBody[0].children[0].text || 'Untitled'}  image={profile.mainImage.asset.url || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {profile && <Profile 
      {...profile} 
      relatedProfilesList = {relatedProfiles} />}
      
    </Layout>
  )
}

export default ProfileTemplate
