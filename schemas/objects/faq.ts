export default{
    type: 'object',
    name: 'faq',
    fields: [
        {
            name: 'question',
            type: 'string'
        },
        {
            name: 'answer',
            type: 'array',
            of:[
                {
                    type: 'block'
                }
            ]
        },
    ]
}