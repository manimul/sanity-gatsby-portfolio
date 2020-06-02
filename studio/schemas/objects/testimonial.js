export default {
            name: 'testimonial',
            title: 'Testimonial',
            type: 'object',
            fields: [
              {
                name: 'author',
                title: 'Author',
                type: 'string'
              },
              {
                name: 'image',
                title: 'Image',
                type: 'image'
              },
              {
                name: 'content',
                title: 'Content',
                type: 'text'
              },
              {
                name: 'link',
                title: 'Link',
                type: 'url'
              }
            ]
        }