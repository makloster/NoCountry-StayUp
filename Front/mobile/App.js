import { ThemeProvider } from "./Context/Theme";
import Navigation from "./navigation/Navigation";

export default function App() {
	return (
		<ThemeProvider>
			<Navigation />
		</ThemeProvider>
	);
}
