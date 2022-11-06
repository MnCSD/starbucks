export default {
  name: "game",
  title: "Game",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },

    {
      name: "slug",
      title: "Slug",
      type: "string",
    },

    {
      name: "image",
      title: "Image",
      type: "image",
    },

    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
    },

    {
      name: "carousel_image_one",
      title: "Carousel Image One",
      type: "image",
    },

    {
      name: "carousel_image_two",
      title: "Carousel Image Two",
      type: "image",
    },

    {
      name: "carousel_image_three",
      title: "Carousel Image Three",
      type: "image",
    },

    {
      name: "carousel_image_four",
      title: "Carousel Image Four",
      type: "image",
    },

    {
      name: "carousel_image_five",
      title: "Carousel Image Five",
      type: "image",
    },

    {
      name: "carousel_image_six",
      title: "Carousel Image Six",
      type: "image",
    },

    {
      name: "carousel_image_seven",
      title: "Carousel Image Seven",
      type: "image",
    },

    {
      name: "carousel_image_eight",
      title: "Carousel Image Eight",
      type: "image",
    },

    {
      name: "carousel_image_nine",
      title: "Carousel Image Nine",
      type: "image",
    },

    {
      name: "carousel_image_ten",
      title: "Carousel Image Ten",
      type: "image",
    },

    {
      name: "video",
      title: "Video",
      type: "string",
    },

    {
      name: "early_access",
      title: "Early Access",
      type: "boolean",
    },

    {
      name: "description",
      title: "Description",
      type: "string",
    },

    {
      name: "price",
      title: "Price",
      type: "number",
    },

    {
      name: "discount_price",
      title: "Discount Price",
      type: "number",
    },

    {
      name: "discount",
      title: "Discount",
      type: "number",
    },

    {
      name: "rating",
      title: "Rating",
      type: "number",
    },

    {
      name: "refund_type",
      title: "Refund Type",
      type: "string",
    },

    {
      name: "developer",
      title: "Developer",
      type: "string",
    },

    {
      name: "publisher",
      title: "Publisher",
      type: "string",
    },

    {
      name: "release_date",
      title: "Release Date",
      type: "string",
    },

    {
      name: "platform",
      title: "Platform",
      type: "string",
    },

    {
      name: "type",
      title: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
  ],
};
