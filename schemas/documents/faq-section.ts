export default {
  type: 'document',
  name: 'faqSection',
  title: 'FAQ Section',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'faqs',
      type: 'array',
      of:[{
        type: 'faq'
      }]
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ]
}
