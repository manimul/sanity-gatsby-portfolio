/*import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import CategoryPageBlock from '../components/category-page-block'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query CategoryTemplateQuery($id: String!) {
    sampleCategory: sanityCategory(id: {eq: $id}) {
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
      slug {
        current
      }
      
      
    }
  }
`

const CategoryTemplate = props => {
  const {data, errors} = props
  const category = data && data.sampleCategory
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {category && <SEO title={category.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {category && <CategoryPageBlock {...category} />}
    </Layout>
  )
}

export default CategoryTemplate
*/