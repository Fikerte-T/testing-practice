const capitalizeString = require('./capitalize-string')
test('capitalize', ()=> {
    expect(capitalizeString('hello')).toMatch('Hello')
})
