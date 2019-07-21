import Uppy from '@uppy/core'
import AwsS3Multipart from '@uppy/aws-s3-multipart'

import { API_HOST, TOKEN } from '../environment'

const uppy = Uppy({
	debug: false,
	autoProceed: false,
	restrictions: {
		maxNumberOfFiles: 1,
		allowedFileTypes: [
			'image/*',
			'video/*',
			'application/pdf',
			'application/msword',
			'application/excel',
			'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
			'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
		]
	}
}).use(AwsS3Multipart, {
	companionUrl: `${API_HOST}/upload`,
	serverHeaders: {
		Authorization: `Bearer ${TOKEN}`
	},
	createMultipartUpload(file) {
		const { name: filename, type, path } = file
		return this.client.post('s3/multipart', { filename, type, path })
	}
})

export default uppy
