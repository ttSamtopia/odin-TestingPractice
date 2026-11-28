const alphabet = "abcdefghijklmnopqrstuvwxyz";

export function caesarCipher(string, shift) {
	return string
		.split("")
		.map((char) => {
			const lower = char.toLowerCase();
			const index = alphabet.indexOf(lower);
			if (index === -1) {
				return char;
			}
			const shifted = alphabet.at((index + shift) % alphabet.length);
			return char === lower ? shifted : shifted.toUpperCase();
		})
		.join("");
}
