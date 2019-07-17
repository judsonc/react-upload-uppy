import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import {
	createMuiTheme,
	MuiThemeProvider,
	responsiveFontSizes
} from '@material-ui/core/styles'

import Content from '../Content'

const theme = responsiveFontSizes(
	createMuiTheme({
		palette: {
			primary: {
				dark: '#303F9F',
				light: '#C5CAE9',
				main: '#3F51B5',
				contrastText: '#fff'
			},
			secondary: {
				light: '#ff7961',
				main: '#f44336',
				dark: '#ba000d',
				contrastText: '#fff'
			},
			background: {
				default: '#e8e8e8'
			}
		}
	})
)

const App = () => (
	<MuiThemeProvider theme={theme}>
		<CssBaseline />
		<Content />
	</MuiThemeProvider>
)

export default App
