import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CloudUpload from '@material-ui/icons/CloudUpload'
import Dashboard from '@uppy/react/lib/Dashboard'
import '@uppy/dashboard/dist/style.css'

import uppy from '../api'
import useStyles from './style'

const Content = () => {
	const classes = useStyles()

	const [urls, setUrls] = useState([])

	uppy.on('file-added', file => Object.assign(file, { path: 'aulas' }))

	uppy.on('complete', ({ successful }) =>
		setUrls(
			successful.map(({ uploadURL, id, name }) => ({ uploadURL, id, name }))
		)
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
					height={300}
					uppy={uppy}
					note="Imagens quaisquer"
					showProgressDetails={true}
					locale={{
						strings: {
							dropPaste: 'Arraste para aqui ou %{browse}',
							browse: 'navegue'
						}
					}}
				/>
				{urls.map(({ uploadURL, id, name }) => (
					<Typography
						key={id}
						variant="h6"
						component="h6"
						align="center"
						gutterBottom
					>
						<Link
							href={uploadURL}
							className={classes.link}
							target="_blank"
							rel="noopener"
						>
							{name}
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
					<CloudUpload className={classes.cloudUploadIcon} />
				</IconButton>
			</Grid>
		</Container>
	)
}

export default Content
