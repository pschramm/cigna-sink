export default {
  widgets: [
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
                  buildHookId: '5f6bbc4f9e294b403c75f7fb',
                  title: 'Sanity Studio',
                  name: 'cigna-sink-studio',
                  apiId: 'f62ba309-9fc9-4f54-9b36-a3da66e9554a'
                },
                {
                  buildHookId: '5f6bbc4f0881844302ba8623',
                  title: 'Blog Website',
                  name: 'cigna-sink',
                  apiId: '6975d3a2-b483-4b36-8a78-a64fe176fe2c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pschramm/cigna-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://cigna-sink.netlify.app', category: 'apps'}
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
