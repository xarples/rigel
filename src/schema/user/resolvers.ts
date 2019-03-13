export default {
  Query: {
    user: (): User => ({
      firstName: 'test'
    }),
    users: (): [{}] => ([
      { firstName: 'test' }
    ])
  }
}