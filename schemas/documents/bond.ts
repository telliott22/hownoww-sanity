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
      type: 'string',
      opotions: {
          list: [
            { value: true, label: 'Yes' },
            { value: false, label: 'No' },
          ],
          layout: 'radio'
      }
    },
    {
      name: 'country',
      type: 'string',
      opotions: {
          list: [
            { value: 'nigeria', label: 'Nigeria' },
            { value: 'ghana', label: 'Ghana' },
            { value: 'angola', label: 'Angola' }
          ],
          layout: 'radio'
      }
    }
  ]
}
