export default {
    name: 'cta',
    type: 'object',
    title: 'Call to Action',
   
    
    fields: [
    
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string'
        },
      {
        name: 'body',
        title: 'Body',
        type: 'profilePortableText'
      },
      {
        name: 'buttonText',
        title: 'Button text',
        type: 'string'
      },
      {
          name: 'buttonLink',
          title: 'Button link',
          type: 'url'
        },
      {
        name: 'image',
        title: 'Image',
        type: 'figure'
      },
      {
          name: 'flow',
          title: 'Reverse Flow',
          description: 'Select if you want the image to lay on the left',
          type: 'boolean'
          
      }
  
    ]
  }
  