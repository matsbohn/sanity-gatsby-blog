export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f8d63a2d58b651c957eb000',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-cj9z45yi',
                  apiId: '2c7b52a8-f93f-4a13-8084-ec7d9a717271'
                },
                {
                  buildHookId: '5f8d63a22ef9451d2dfe307f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8qeh4i65',
                  apiId: '1f1959a6-a1fa-4bc2-b9bb-c69b0f7034bb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/matsbohn/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8qeh4i65.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
