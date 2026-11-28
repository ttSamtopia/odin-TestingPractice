export function analyzeArray(array) {
	if (array.length === 0) {
		throw new Error("Can't analyze empty array");
	}

	const sorted = array.slice().sort((a, b) => a - b);
	const sum = array.reduce((total, number) => total + number, 0);

	return {
		average: sum / array.length,
		min: sorted.at(0),
		max: sorted.at(-1),
		length: array.length,
	};
}
