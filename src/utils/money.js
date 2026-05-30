export default function formatMoney(data) {
	return `$${Number(parseFloat(data / 100)).toFixed(2)}`;
}
