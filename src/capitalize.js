export function capitalize(string) {
	const trimmed = string.trimStart();
	return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}
