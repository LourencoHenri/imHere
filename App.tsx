import { NativeBaseProvider, extendTheme } from "native-base";
import { Home } from "./src/screens/Home";
import { StatusBar } from "react-native";
import "./src/i18n";

export default function App() {
	const theme = extendTheme({
		colors: {
			primary: {
				main: "#007BFF",
			},
		},
	});

	return (
		<NativeBaseProvider theme={theme}>
			<StatusBar barStyle={"light-content"} translucent />
			<Home />
		</NativeBaseProvider>
	);
}
