import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
	},
	eventName: {
		// color: "#FDFCFE",
		fontWeight: "bold",
		marginTop: 48,
		marginBottom: 4,
		textAlign: "center",
	},
	eventDate: {
		// color: "#6B6B6B",
		fontSize: 16,
		textAlign: "center",
		alignItems: "center",
		marginBottom: 24,
	},
	eventDateText: {
		// color: "#6B6B6B",
		fontSize: 14,
		textAlign: "center",
		width: "80%",
	},
	buttonText: {},
	button: {
		width: 40,
		height: 40,
		borderRadius: 40,
		backgroundColor: "#31CF67",
		alignItems: "center",
		justifyContent: "center",
	},
	submitButton: {
		borderRadius: 40,
		height: 40,
		backgroundColor: "#31CF67",
		alignItems: "center",
		justifyContent: "center",
	},
	listEmptyText: {
		color: "#FFF",
		fontSize: 14,
		textAlign: "center",
	},
	participantInputContainer: {
		backgroundColor: "#FFF",
		padding: 4,
		paddingLeft: 16,
		borderRadius: 40,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	participantInput: {
		height: 32,
		width: "100%",
	},
	participantInputText: {},
	participantForm: {
		gap: 12,
		marginBottom: 24,
	},
});
