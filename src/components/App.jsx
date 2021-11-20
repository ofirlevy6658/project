import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./ui/Theme";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

function App() {
	const [value, setValue] = useState(0);
	const [selectedIndex, setSelectedIndex] = useState(0);
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header
					value={value}
					setValue={setValue}
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
				/>
				<Routes>
					<Route path="/" element={<div style={{ height: "2000px" }} />} />
					<Route path="/customsoftware" />
					<Route path="/mobileapps" />
					<Route path="/websites" />
					<Route path="/revolution" />
					<Route path="/about" />
					<Route path="/contact" />
					<Route path="/estimate" />
				</Routes>
				<Footer
					value={value}
					setValue={setValue}
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
				/>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
