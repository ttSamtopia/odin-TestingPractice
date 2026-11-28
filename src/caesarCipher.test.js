import { caesarCipher } from "./caesarCipher.js";

test("String gets shifted", () => {
	expect(caesarCipher("hello", 3)).toBe("khoor");
});

test("String gets shifted, wrap alphabet", () => {
	expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("String gets shifted, preserve case", () => {
	expect(caesarCipher("Hello", 3)).toBe("Khoor");
});

test("String gets shifted, punctuation", () => {
	expect(caesarCipher("Hello!", 3)).toBe("Khoor!");
});

test("String gets shifted, 0 shift", () => {
	expect(caesarCipher("Hello", 0)).toBe("Hello");
});

test("String gets shifted, 26 shift", () => {
	expect(caesarCipher("Hello", 26)).toBe("Hello");
});

test("String gets shifted, negative shift", () => {
	expect(caesarCipher("Khoor", -3)).toBe("Hello");
});

test("String gets shifted, wrap alphabet backwards", () => {
	expect(caesarCipher("abc", -3)).toBe("xyz");
});

test("String gets shifted, shift more than alphabet", () => {
	expect(caesarCipher("Hello", 29)).toBe("Khoor");
});