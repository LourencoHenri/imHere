import { NativeBaseProvider } from "native-base";
import { Home } from "./src/screens/Home";
import { StatusBar } from "react-native";
import "./src/i18n";

export default function App() {
	return (
		<NativeBaseProvider>
			<StatusBar barStyle={"light-content"} translucent />
			<Home />
		</NativeBaseProvider>
	);
}
