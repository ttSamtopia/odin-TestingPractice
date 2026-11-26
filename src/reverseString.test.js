import { reverseString } from "./reverseString.js";

test("Return reversed string", () => {
    expect(reverseString("Hello")).toBe("olleH");
})

test("Return reversed palindrome", () => {
    expect(reverseString("Radar")).toBe("radaR");
})

test("Return reversed empty string", () => {
    expect(reverseString("")).toBe("");
})

test("Return reversed sentences with punctuation and spaces", () => {
    expect(reverseString("Hello, my name is Samuel.")).toBe(".leumaS si eman ym ,olleH");
})