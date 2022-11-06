export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },

    {
      name: "games",
      type: "array",
      title: "Games",
      of: [{ type: "reference", to: [{ type: "game" }] }],
    },
  ],
};
