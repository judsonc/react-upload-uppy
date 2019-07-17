import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'

import './index.css'
import App from './App'
import client from './api'

render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
)
