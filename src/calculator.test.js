import { calculator } from "./calculator.js";

test("Calculator add function works", () => {
	expect(calculator.add(1, 2)).toBe(3);
});

test("Calculator add function works, negative number", () => {
	expect(calculator.add(-1, 2)).toBe(1);
});

test("Calculator add function works, zero", () => {
	expect(calculator.add(1, 0)).toBe(1);
});

test("Calculator add function works, decimals", () => {
	expect(calculator.add(1.2, 2.3)).toBeCloseTo(3.5);
});

test("Calculator subtract function works", () => {
	expect(calculator.subtract(2, 1)).toBe(1);
});

test("Calculator subtract function works, negative number", () => {
	expect(calculator.subtract(-1, 2)).toBe(-3);
});

test("Calculator subtract function works, zero", () => {
	expect(calculator.subtract(1, 0)).toBe(1);
});

test("Calculator subtract function works, decimals", () => {
	expect(calculator.subtract(2.3, 1.2)).toBeCloseTo(1.1);
});

test("Calculator multiply function works", () => {
	expect(calculator.multiply(2, 2)).toBe(4);
});

test("Calculator multiply function works, negative number", () => {
	expect(calculator.multiply(-1, 2)).toBe(-2);
});

test("Calculator multiply function works, zero", () => {
	expect(calculator.multiply(1, 0)).toBe(0);
});

test("Calculator multiply function works, decimals", () => {
	expect(calculator.multiply(2.3, 1.2)).toBeCloseTo(2.76);
});

test("Calculator divide function works", () => {
	expect(calculator.divide(10, 2)).toBe(5);
});

test("Calculator divide function works, negative number", () => {
	expect(calculator.divide(-10, 2)).toBe(-5);
});

test("Calculator divide function works, zero", () => {
	expect(calculator.divide(10, 0)).toBe(Infinity);
});

test("Calculator divide function works, decimals", () => {
	expect(calculator.divide(2.3, 1.2)).toBeCloseTo(1.92);
});
