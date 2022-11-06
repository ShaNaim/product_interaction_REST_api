function handleSuccessResponse(payload) {
	return {
		success: true,
		error: null,
		data: payload,
	};
}

function handleErrorResponse(payload) {
	return {
		success: true,
		error: payload,
		data: null,
	};
}

module.exports = {
	handleSuccessResponse,
	handleErrorResponse,
};
