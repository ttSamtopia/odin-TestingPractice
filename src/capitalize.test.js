import { capitalize } from "./capitalize.js";

test("First letter capitalized out", () => {
	expect(capitalize("hello")).toBe("Hello");
});

test("Already capitalized", () => {
	expect(capitalize("Hello")).toBe("Hello");
});

test("Single letter word", () => {
	expect(capitalize("i")).toBe("I");
});

test("Empty string", () => {
	expect(capitalize("")).toBe("");
});

test("First index, empty space", () => {
	expect(capitalize(" hello")).toBe("Hello");
});

test("First index, not letter", () => {
	expect(capitalize("1abc")).toBe("1abc");
});
