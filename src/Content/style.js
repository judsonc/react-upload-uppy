import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
	content: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		height: '100vh',
		minHeight: 310
	},
	contentBody: {
		height: 'calc(100% - 130px)'
	},
	CloudUploadIcon: {
		fontSize: 70
	},
	link: {
		color: theme.palette.primary.contrastText
	}
}))
