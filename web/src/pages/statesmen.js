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


const categorySubtitle = "Who's Who in Ghana Presents"


export const query = graphql`
  query StatesmenPageQuery {
    categories: sanityCategory(id: {eq: "14bd4dfa-1c2f-5bf0-9c4d-dceb511cc7ea"}) {
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
    projects: allSanitySampleProject(
      limit: 12
      sort: {fields: [publishedAt], order: DESC}
      filter: {categories: {elemMatch: {id: {eq: "14bd4dfa-1c2f-5bf0-9c4d-dceb511cc7ea"}}}}
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
const StatesmenPage = props => {
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
        subtitle={categorySubtitle}
        description={data.categories.description}
        image={data.categories.mainImage.asset.url}
        nodes={projectNodes} />}

        
      </Container>
    </Layout>
  )
}

export default StatesmenPage
