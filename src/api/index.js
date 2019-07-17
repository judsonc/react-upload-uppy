import ApolloClient from 'apollo-boost'

import { API_HOST } from '../environment'

const client = new ApolloClient({
	uri: `${API_HOST}/graphql`
})

export default client
