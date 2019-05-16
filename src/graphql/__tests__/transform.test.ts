import { fromFetchMoreToSafeUpdate, fromNewDataToApollo } from '../transform'

describe('graphql', () => {
  describe('transform', () => {
    it('should safely transform our response', () => {
      const transformed = fromFetchMoreToSafeUpdate({})
      const apollo = fromNewDataToApollo({})
      expect(transformed).toMatchSnapshot()
      expect(apollo).toMatchSnapshot()
    })
  })
})
