const ErrorRepository = require('./errorRepository')

test('получение текста ошибки по коду', () => {
	const errorRepository = new ErrorRepository()
	errorRepository.errors.set(404, 'Not Found')
	expect(errorRepository.translate(404)).toBe('Not Found')
})

test('получение текста ошибки по несуществующему коду', () => {
	const errorRepository = new ErrorRepository()
	expect(errorRepository.translate(404)).toBe('Unknown error')
})
