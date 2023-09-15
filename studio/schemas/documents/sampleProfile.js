import { format } from "date-fns";

export default {
  name: "sampleProfile",
  title: "Profile",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }]
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Some frontend will require a slug to be set to be able to show the profile",
      options: {
        source: "name",
        maxLength: 96
      }
    },
    {
      name: "publishedAt",
      title: "Published at",
      description: "You can use this field to schedule profiles where you show them",
      type: "datetime"
    },
    {
      name: "body",
      title: "Body",
      type: "profilePortableText"
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "simplePortableText"
    },
    {
      name: "videos",
      title: "Videos",
      type: "array",
      of: [{ type: "youtube" }]
    },

    {
      name: "mainImage",
      title: "Main image",
      type: "figure"
    },

    {
      name: "relatedProfiles",
      title: "Related profiles",
      type: "array",
      of: [{ type: "reference", to: { type: "sampleProfile" } }]
    }
  ],

  preview: {
    select: {
      title: "name",
      publishedAt: "publishedAt",
      slug: "slug",
      media: "mainImage"
    },
    prepare({ title = "No title", publishedAt, slug = {}, media }) {
      const dateSegment = format(publishedAt, "YYYY/MM");
      const path = `/${dateSegment}/${slug.current}/`;
      return {
        name,
        title,
        media,
        subtitle: publishedAt ? path : "Missing publishing date"
      };
    }
  }
};
