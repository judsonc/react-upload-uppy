import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CloudUpload from '@material-ui/icons/CloudUpload'
import Uppy from '@uppy/core'
import AwsS3 from '@uppy/aws-s3-multipart'
import Dashboard from '@uppy/react/lib/Dashboard'
import '@uppy/dashboard/dist/style.css'

import { API_HOST } from '../environment'
import useStyles from './style'

const uppy = Uppy({
	debug: false,
	autoProceed: false
}).use(AwsS3, { companionUrl: API_HOST })

const Content = () => {
	const classes = useStyles()

	const [urls, setUrls] = useState([])

	uppy.on('complete', result =>
		setUrls(result.successful.map(i => i.uploadURL))
	)

	const onClickUpload = event => {
		event.preventDefault()
		uppy.upload()
	}

	return (
		<Container maxWidth={false} component="main" className={classes.content}>
			<Grid
				container
				direction="column"
				justify="center"
				className={classes.contentBody}
			>
				<Typography variant="h1" component="h1" align="center" gutterBottom>
					Upload
				</Typography>

				<Dashboard
					width="100%"
					uppy={uppy}
					note="Imagens quaisquer"
					locale={{
						strings: {
							// Text to show on the droppable area.
							// `%{browse}` is replaced with a link that opens the system file selection dialog.
							dropHereOr: 'Arraste para aqui ou navegue',
							// Used as the label for the link that opens the system file selection dialog.
							navegue: 'browse'
						}
					}}
				/>
				{urls.map(url => (
					<Typography
						key={url}
						variant="h6"
						component="h6"
						align="center"
						gutterBottom
					>
						<Link
							href={url}
							className={classes.link}
							target="_blank"
							rel="noopener"
						>
							{url}
						</Link>
					</Typography>
				))}
			</Grid>
			<Grid container justify="center">
				<IconButton
					key="upload"
					aria-label="Go-upload"
					color="inherit"
					onClick={onClickUpload}
				>
					<CloudUpload className={classes.CloudUploadIcon} />
				</IconButton>
			</Grid>
		</Container>
	)
}

export default Content
