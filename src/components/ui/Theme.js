import { createTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

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
			main: `${arcBlue}`,
		},
		Typography: {
			h3: {
				fontWeight: 300,
			},
		},
	},
});
