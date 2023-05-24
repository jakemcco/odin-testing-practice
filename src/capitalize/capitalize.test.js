import capitalize from "./capitalize";

test('capitalizes first letter in string', () => {
    expect(capitalize('mystring')).toBe('Mystring');
});