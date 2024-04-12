class ErrorRepository {
	constructor() {
		this.errors = new Map()
	}

	translate(code) {
		if (this.errors.has(code)) {
			return this.errors.get(code)
		}
		return 'Unknown error'
	}
}

module.exports = ErrorRepository
