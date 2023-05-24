import calculator from "./calculator";

test('Add two numbers correctly', () => {
    //Positive integers
    expect(calculator.add(1, 7)).toBe(8);
    //Negative integers
    expect(calculator.add(-2, -4)).toBe(-6);
    //Mixed integers
    expect(calculator.add(-2, 12)).toBe(10);

    //Floats
    expect(calculator.add(1.0, 2.0)).toBe(3.0);

});

test('Subtract two numbers correctly', () => {
        //Positive integers w/ positive result
        expect(calculator.subtract(7, 1)).toBe(6);
        //Positive integers w/ negative result
        expect(calculator.subtract(1, 7)).toBe(-6);
        //Negative integers w/ negative result
        expect(calculator.subtract(-6, -4)).toBe(-2);
        //Negative integers w/ positive result
        expect(calculator.subtract(-6, -10)).toBe(4);
        //Mixed integers w/ negative result
        expect(calculator.subtract(-2, 12)).toBe(-14);
        //Mixed integers w/ positive result
        expect(calculator.subtract(10, -2)).toBe(12);
    
        //Floats
        expect(calculator.subtract(1.0, 2.0)).toBe(-1.0);

});

test('Multiply two numbers correctly', () => {
    expect(calculator.multiply(5, 6)).toBe(30);
    expect(calculator.multiply(-4, 4)).toBe(-16);
    expect(calculator.multiply(-30, 10)).toBe(-300);
});

test('Divide two numbers correctly', () => {
    expect(calculator.divide(5, 10)).toBe(0.5);
    expect(calculator.divide(10, 5)).toBe(2);
    expect(calculator.divide(-30, 10)).toBe(-3);
    expect(calculator.divide(10, -30)).toBe(-0.3333333333333333);
    expect(calculator.divide(10, -30)).toBe(-1/3);
});