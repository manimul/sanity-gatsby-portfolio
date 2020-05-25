import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Profile from '../components/profile'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query ProfileTemplateQuery($id: String!) {
    sampleProfile: sanitySampleProfile(id: {eq: $id}) {
      id
      publishedAt
      categories {
        _id
        title
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
        }
        alt
      }
      title
      slug {
        current
      }
      _rawBody
      members {
        _key
        person {
          image {
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
          }
          name
        }
        roles
      }
    }
  }
`

const ProfileTemplate = props => {
  const {data, errors} = props
  const profile = data && data.sampleProfile
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {profile && <SEO title={profile.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {profile && <Profile {...profile} />}
    </Layout>
  )
}

export default ProfileTemplate
