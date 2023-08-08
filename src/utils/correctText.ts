export default function correctText(str: string): string {
	if (!str) return ''
	return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
}