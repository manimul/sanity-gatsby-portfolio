export default {
    name: 'ctas',
    type: 'document',
    title: 'Call to Actions',
   
    
    fields: [
        {
            title: 'Type',
            name: 'type',
            type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'radio',
        list: [
          {title: 'Book Promo', value: 'book-promo'},
          {title: 'Profile Promo', value: 'profile-promo'},
          {title: 'Event Promo', value: 'event-promo'}
        ]
      }
          },
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
          type: 'string'
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
  