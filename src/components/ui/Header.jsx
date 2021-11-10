import React from "react";
// import AppBar from "@mui/material/AppBar";
import { AppBar, Toolbar, Typography } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";

function ElevationScroll(props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}
export default function Header() {
	return (
		<ElevationScroll>
			<AppBar position="fixed">
				<Toolbar>
					<Typography variant="h3" color="error">
						Arc Development
					</Typography>
				</Toolbar>
			</AppBar>
		</ElevationScroll>
	);
}
