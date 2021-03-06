// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import category from './documents/category'
import person from './documents/person'
import sampleProfile from './documents/sampleProfile'
import siteSettings from './documents/siteSettings'
import page from './documents/page'
import ctas from './documents/ctas'

// Object types
import bioPortableText from './objects/bioPortableText'
import figure from './objects/figure'
import profileMember from './objects/profileMember'
import profilePortableText from './objects/profilePortableText'
import simplePortableText from './objects/simplePortableText'
import youtube from './objects/youtube'
import hero from './objects/hero'
import cta from './objects/cta'
import testimonialSlider from './objects/testimonialSlider'
import testimonial from './objects/testimonial'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'portfolio',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    bioPortableText,
    cta,
    hero,
    figure,
    profileMember,
    profilePortableText,
    simplePortableText,
    youtube,
    testimonialSlider,
    testimonial,
    // The following are document types which will appear
    // in the studio.
    category,
    person,
    sampleProfile,
    siteSettings,
    page,
    ctas
  ])
})
