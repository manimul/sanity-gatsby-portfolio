export default {
    name: 'page',
    type: 'document',
    title: 'Page',
    initialValue: {
        flow: false
      },
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96
            },
        },
        {
            name: 'body',
            title: 'Body',
            type: 'profilePortableText'
          },
        {
            name: 'flow',
            title: 'Reverse Flow',
            description: 'Select if you want the image to lay on the left',
            type: 'boolean'
            
        },

        {
            title: 'Call to action',
            name: 'cta',
            type: 'reference',
            to: {type: 'ctas'}
          },

            {
                name: 'pageModules',
                title: 'Page Modules',
                type: 'array',
                description: "Home page sections.",
                
                of: [
                    {
                        type: 'hero'
                    },
                    {
                        type: 'testimonialSlider'
                    },
                    {
                        type: 'cta'
                    },
                    {   type: 'youtube'
                }
                ]

              }
        
    ]
}