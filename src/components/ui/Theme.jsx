import { createTheme } from "@mui/material/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";
export default createTheme({
	palette: {
		common: {
			blue: arcBlue,
			orange: arcOrange,
		},
		primary: {
			main: arcBlue,
		},
		secondary: {
			main: arcOrange,
		},
	},
	typography: {
		tab: {
			fontFamily: "Raleway",
			textTransform: "none",
			fontWeight: "700",
			fontSize: "1rem",
			color: "white",
		},
		estimate: {
			fontFamily: "Pacifico",
			fontSize: "1rem",
			textTransform: "none",
			color: "white",
		},
		h2: {
			fontFamily: "Raleway",
			fontWeight: "700",
			fontSize: "2.5rem",
			color: arcBlue,
			lineHeight: 1.5,
		},
		h4: {
			fontFamily: "Raleway",
			fontWeight: "700",
			fontSize: "1.75rem",
			color: arcBlue,
		},
		subtitle1: {
			fontSize: "1.25rem",
			fontWeight: "300",
			color: arcGrey,
		},
		learnButton: {
			borderWidth: 2,
			textTransform: "none",
			borderRadius: 50,
			fontFamily: "Roboto",
			fontWeight: "bold",
		},
	},
	components: {
		MuiPaper: {
			styleOverrides: {
				rounded: {
					backgroundColor: `${arcBlue}`,
					color: "white",
					borderRadius: "0px",
				},
			},
		},
		MuiMenuItem: {
			styleOverrides: {
				root: {
					fontFamily: "Raleway",
					textTransform: "none",
					fontWeight: "700",
					fontSize: "1rem",
					color: "white",
					opacity: 0.7,
					"&:hover": {
						opacity: 1,
					},
				},
			},
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
});
