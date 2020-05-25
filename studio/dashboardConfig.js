export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e7875d110f0a981423b69e4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-pmpaa7of',
                  apiId: 'c6c957e3-aa5e-4a1c-9720-81223d5296ce'
                },
                {
                  buildHookId: '5e7875d1be1baf40707b319d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-tfifq91r',
                  apiId: '16a896b7-19c9-4700-8104-523d58d0bfe2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/manimul/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-tfifq91r.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent profiles', order: '_createdAt desc', types: ['sampleProfile']},
      layout: {width: 'medium'}
    }
  ]
}
