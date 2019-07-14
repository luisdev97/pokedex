
export const getColor = type => {
	switch (type) {
		case "poison":
			return "purple";
		case "fire":
			return "red";
		case "grass":
			return "green";
		default:
			return "blue";
	}
}