const Calculator = require('./calculator')

describe('calculator', ()=> {
    const calc = new Calculator();
    test('addition', ()=> {
        expect(calc.add(1,2)).toBe(3);
        expect(calc.add(3,5)).toBe(8);
        expect(calc.add(0,0)).toBe(0);
    });
    test('subtraction', () => {
        expect(calc.subtract(1,2)).toBe(-1);
        expect(calc.subtract(0,0)).toBe(0);
        expect(calc.subtract(2,2)).toBe(0);
    })
    test('multiplication', ()=> {
        expect(calc.multiply(0,2)).toBe(0);
        expect(calc.multiply(2,3)).toBe(6);
        expect(calc.multiply(1000,0)).toBe(0);
    })
    test('division', ()=> {
        expect(calc.divide(0,1000)).toBe(0);
        expect(calc.divide(8,2)).toBe(4);
        expect(calc.divide(10,10)).toBe(1);
    })
})
