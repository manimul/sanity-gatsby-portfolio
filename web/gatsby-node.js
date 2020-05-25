const {isFuture} = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createProfilePages (graphql, actions, reporter) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanitySampleProfile(filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const profileEdges = (result.data.allSanitySampleProfile || {}).edges || []

  profileEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach(edge => {
      const id = edge.node.id
      const slug = edge.node.slug.current
      const path = `/profile/${slug}/`

      reporter.info(`Creating profile page: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/profile.js'),
        context: {id}
      })
    })
}

exports.createPages = async ({graphql, actions, reporter}) => {
  await createProfilePages(graphql, actions, reporter)
}



