const { expect } = require('@jest/globals')
const stringLength = require('./string-length')
test('string length', () => {
    expect(stringLength('helloworld')).toBe(10)
})
