const isPalindrome = require("../palindrome");

describe('palindromeCheck', () => {
    it('Should return whether or not the string is palindrome', () => {
        expect(isPalindrome('a')).toBe(true);
        expect(isPalindrome('pop')).toBe(true);
        expect(isPalindrome('deed')).toBe(true);
        expect(isPalindrome('kayak')).toBe(true);
        expect(isPalindrome('racecar')).toBe(true);

        expect(isPalindrome('rad')).toBe(false);
        expect(isPalindrome('dodo')).toBe(false);
        expect(isPalindrome('pol55o')).toBe(false);
    })
});
