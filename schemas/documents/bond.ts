export default {
  type: 'document',
  name: 'bond',
  title: 'Bonds',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title',
          maxLength: 200,
          slugify: input => input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 200)
        }
      },
    {
      name: 'issuer',
      type: 'string',
    },
    {
      name: 'issuerUrl',
      type: 'string',
    },
    {
      name: 'issuerType',
      type: 'string',
      options: {
          list: [
            { value: 'government', title: 'Government' },
            { value: 'corporate', title: 'Corportate' },
            { value: 'bank', title: 'Bank' },
            { value: 'supranational', title: 'Supranational' },
          ],
          layout: 'radio'
      }
    },
    {
      name: 'issueDate',
      type: 'date',
    },
    {
      name: 'maturityDate',
      type: 'date',
    },
    {
      name: 'longShortCouponDate',
      type: 'date',
    },
    {
      name: 'coupon',
      type: 'string',
    },
    {
      name: 'amountOutstanding',
      type: 'string',
    },
    {
      name: 'dayCountConvention',
      type: 'string',
    },
    {
      name: 'prospectus',
      type: 'file',
    },
    {
      name: 'expired',
      type: 'boolean',
    },
    {
      name: 'country',
      type: 'string',
      options: {
          list: [
            { value: 'nigeria', title: 'Nigeria' },
            { value: 'ghana', title: 'Ghana' },
            { value: 'angola', title: 'Angola' }
          ],
          layout: 'radio'
      }
    }
  ]
}
