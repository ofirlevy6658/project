import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ui/Theme";
import Header from "./ui/Header";
import Button from "@mui/material/Button";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
		</ThemeProvider>
	);
}

export default App;
