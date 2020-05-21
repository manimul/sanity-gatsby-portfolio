import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import CategoryPageBlock from '../components/category-page-block'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../lib/helpers'

import {responsiveTitle1} from '../components/typography.module.css'



export const query2 = graphql`
  query CategoryPageQuery {
    categories: sanityCategory(id: {eq: "2243b0bb-9899-55bc-a77b-87a7ecd6af64"}) {
    id
    title
    slug {
      current
    }
    description
  }
    projects: allSanitySampleProject(
      limit: 12
      sort: {fields: [publishedAt], order: DESC}
      filter: {categories: {elemMatch: {title: {eq: "Most Influential"}}}}
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
const CategoryPage = props => {
  const {data, errors} = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }


  const projectNodes =
    data && data.projects  && mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <SEO title={data.categories.title} />
      <Container>


        {projectNodes && projectNodes.length > 0 && <CategoryPageBlock 
       title={data.categories.title}
        subtitle={data.categories.subtitle}
        description={data.categories.description}
        nodes={projectNodes} />}

        
      </Container>
    </Layout>
  )
}

export default CategoryPage
