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
import {hero} from '../components/layout.module.css'
import {responsiveTitle1} from '../components/typography.module.css'



export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      subtitle
      description
      keywords
      figure {asset {url}}
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

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
     

       

<section class={hero} id="hero">
<div class="py-32 h-auto">

	<div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
	
		<div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
			<p class="uppercase tracking-loose w-full">{site.title}</p>
			<h1 class="my-4 text-5xl font-bold leading-tight">{site.subtitle}</h1>
			<p class="leading-normal text-2xl mb-8">{site.subtitle}</p>
		
			

			<button class="mx-auto lg:mx-0 hover:underline bg-yellow-700 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Learn More</button>
			
		</div>
	
		<div class="w-full md:w-3/5 py-6 text-center">
			<img class="w-full md:w-4/5 z-50" src="hero.png"></img>
		</div>
		
	</div>

</div>
</section>

      <Container>
        
        
        <section id="featured_profiles">
        <h2>Ghanas Most Influential</h2>
        {projectNodes && (
          <ProjectPreviewGrid
            title=''
            nodes={projectNodes}
            browseMoreHref='/category/'
          />
        )}</section>
          <section id="featured_news">
        <h2>Ghanas Entrepreneurs</h2>
        {projectNodes && (
          <ProjectPreviewGrid
            title=''
            nodes={projectNodes}
            browseMoreHref='/category/'
          />
        )}</section>
        <section>Newsletter Signup</section>
        <section>Contact</section>
      </Container>
      
    </Layout>
  )
}

export default IndexPage
