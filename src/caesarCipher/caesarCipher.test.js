import caesarCipher from "./caesarCipher";

test('Returns a new string that is the input string with each character "shifted" by the specified factor', () => {

    //Retain punctuation, capitalization, spaces
    //caesarCipher('MyTest String !', 1);
    expect(caesarCipher('An*iMal ! Planet.', 0)).toBe('An*iMal ! Planet.');
    expect(caesarCipher('An*iMal ! Planet.', 1)).toBe('Bo*jNbm ! Qmbofu.');
    expect(caesarCipher('An*iMal ! Planet.', 26)).toBe('An*iMal ! Planet.');
    expect(caesarCipher('An*iMal ! Planet.', 27)).toBe('Bo*jNbm ! Qmbofu.');
    expect(caesarCipher(' | ', 3)).toBe(' | ');
    expect(caesarCipher('', 5)).toBe('');


});