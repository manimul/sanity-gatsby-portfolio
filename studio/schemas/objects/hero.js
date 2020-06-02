export default {
  name: 'hero',
  type: 'object',
  title: 'Hero',
  
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
      type: 'text'
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
