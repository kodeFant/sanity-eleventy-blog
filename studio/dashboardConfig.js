export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5fa418b50929e0aa255f97d4',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-yj3jrdj9',
                  apiId: 'b149cb1d-0d5d-4a7e-9aa8-5280c43b44f7'
                },
                {
                  buildHookId: '5fa418b44978c9ba369b36a4',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-82m3r52c',
                  apiId: 'cf109c6c-9284-4107-8b5d-873380b7b826'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kodeFant/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-82m3r52c.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
