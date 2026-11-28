import { analyzeArray } from "./analyzeArray.js";

test("Array analyzed correctly", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});

test("Array analyzed, single element", () => {
	expect(analyzeArray([5])).toEqual({
		average: 5,
		min: 5,
		max: 5,
		length: 1,
	});
});

test("Array analyzed, negative numbers", () => {
	expect(analyzeArray([-1, -8, -3, -4, -2, -6])).toEqual({
		average: -4,
		min: -8,
		max: -1,
		length: 6,
	});
});

test("Array analyzed, decimal average", () => {
	const result = analyzeArray([1.1, 8.2, 3.3, 4.4, 2.5, 6.6]);
	expect(result.average).toBeCloseTo(4.35);
	expect(result.min).toBe(1.1);
	expect(result.max).toBe(8.2);
	expect(result.length).toBe(6);
});

test("Array analyzed, empty array error", () => {
	expect(() => analyzeArray([])).toThrow("Can't analyze empty array");
});
