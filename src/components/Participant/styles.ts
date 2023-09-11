import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		width: "100%",
		backgroundColor: "#1F1E25",
		borderRadius: 20,
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
	name: {
		flex: 1,
		fontSize: 14,
		padding: 12,
        paddingLeft: 16,
	},
	buttonText: {
		color: "#FFF",
		fontSize: 24,
	},
	button: {
		width: 32,
		height: 32,
		borderRadius: 32,
		backgroundColor: "#E23C44",
		alignItems: "center",
		justifyContent: "center",
	},
});
