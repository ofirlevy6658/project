import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./ui/Theme";
import Header from "./ui/Header";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" />
					<Route path="/customsoftware" />
					<Route path="/mobileapps" />
					<Route path="/websites" />
					<Route path="/revolution" />
					<Route path="/about" />
					<Route path="/contact" />
					<Route path="/estimate" />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
