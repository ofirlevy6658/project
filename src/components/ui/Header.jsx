import React, { useState, useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { AppBar, Toolbar, Tabs, Tab, Button } from "@mui/material";
import { styled } from "@mui/system";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import logo from "../../assets/logo.svg";

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
const Img = styled("img")``;

const Div = styled(`div`)(({ theme }) => ({
	...theme.mixins.toolbar,
	marginBottom: "3em",
}));

const StyledTab = styled(Tab)(({ theme }) => ({
	...theme.typography.tab,
	minWidth: 10,
	marginLeft: "25px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
	borderRadius: "50px",
	height: "45px",
	...theme.typography.estimate,
}));

export default function Header() {
	const [value, setValue] = useState(0);
	const navigate = useNavigate();
	console.log(navigate);
	useEffect(() => {
		if (window.location.pathname === "/" && value !== 0) setValue(0);
		else if (window.location.pathname === "/services" && value !== 1)
			setValue(1);
		else if (window.location.pathname === "/revolution" && value !== 2)
			setValue(2);
		else if (window.location.pathname === "/about" && value !== 3) setValue(3);
		else if (window.location.pathname === "/contact" && value !== 4)
			setValue(4);
		else if (window.location.pathname === "/estimate" && value !== 5)
			setValue(5);
	}, [value]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<>
			<ElevationScroll>
				<AppBar position="fixed">
					<Toolbar disableGutters>
						<Button
							component={RouterLink}
							to="/"
							sx={{ p: 0 }}
							onClick={() => setValue(0)}
							disableRipple
						>
							<Img style={{ height: "9em" }} src={logo} alt="company logo" />
						</Button>
						<Tabs
							sx={{ marginLeft: "auto", fontSize: "3rem" }}
							value={value}
							onChange={handleChange}
							textColor="inherit"
						>
							<StyledTab label="Home" component={RouterLink} to="/" />
							<StyledTab
								label="Services"
								component={RouterLink}
								to="/services"
							/>
							<StyledTab
								label="The Revolution"
								component={RouterLink}
								to="/revolution"
							/>
							<StyledTab label="About Us" component={RouterLink} to="/about" />
							<StyledTab
								label="Contact Us"
								component={RouterLink}
								to="/contact"
							/>
						</Tabs>
						<StyledButton
							variant="contained"
							color="secondary"
							component={RouterLink}
							to="/estimate"
							onClick={() => setValue(5)}
						>
							Free Estimate
						</StyledButton>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<Div />
		</>
	);
}
