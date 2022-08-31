export default {
  type: 'object',
  properties: {
    id: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },
  },
  required: ['id', 'email', 'password']
} as const;