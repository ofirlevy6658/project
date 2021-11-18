import { createTheme } from "@mui/material/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

export default createTheme({
	palette: {
		common: {
			blue: `${arcBlue}`,
			orange: `${arcOrange}`,
		},
		primary: {
			main: `${arcBlue}`,
		},
		secondary: {
			main: `${arcOrange}`,
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
});
