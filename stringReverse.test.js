
const reverseString = require('./stringReverse')

test('Reversed string', () => {
    const str = 'olleh'
    expect(reverseString('hello')).toMatch(str)
})
