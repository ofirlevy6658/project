import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
	AppBar,
	Toolbar,
	Tabs,
	Tab,
	Button,
	Menu,
	MenuItem,
	SwipeableDrawer,
	IconButton,
	List,
	ListItemButton,
	ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

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
	[theme.breakpoints.down("lg")]: {
		marginBottom: "2em",
	},
	[theme.breakpoints.down("sm")]: {
		marginBottom: "1.25em",
	},
}));

const StyledTab = styled(Tab)(({ theme }) => ({
	...theme.typography.tab,
	minWidth: 10,
	marginLeft: "25px",
	// "&:hover": {
	// 	backgroundColor: "blue",
	// },
}));

const StyledButton = styled(Button)(({ theme }) => ({
	borderRadius: "50px",
	height: "45px",
	...theme.typography.estimate,
}));

const selectedStyle = {
	opacity: 0.7,
};

export default function Header() {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("md"));
	const iOS =
		typeof navigator !== "undefined" &&
		/iPad|iPhone|iPod/.test(navigator.userAgent);

	const [openDrawer, setOpenDrawer] = useState(false);
	const [value, setValue] = useState(0);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const openMenu = Boolean(anchorEl);

	useEffect(() => {
		switch (window.location.pathname) {
			case "/":
				if (value !== 0) setValue(0);
				break;
			case "/services":
				if (value !== 1) {
					setValue(1);
					setSelectedIndex(0);
				}
				break;
			case "/customsoftware":
				if (value !== 1) {
					setValue(1);
					setSelectedIndex(1);
				}
				break;
			case "/mobileapps":
				if (value !== 1) {
					setValue(1);
					setSelectedIndex(2);
				}
				break;
			case "/websites":
				if (value !== 1) {
					setValue(1);
					setSelectedIndex(3);
				}
				break;
			case "/revolution":
				if (value !== 2) setValue(2);
				break;
			case "/about":
				if (value !== 3) setValue(3);
				break;
			case "/contact":
				if (value !== 4) setValue(4);
				break;
			case "/estimate":
				if (value !== 5) setValue(5);
				break;
			default:
				break;
		}
	}, [value]);

	const handleChange = (e, newValue) => {
		setValue(newValue);
	};
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleMenuItemClick = (e, i) => {
		setSelectedIndex(i);
		setAnchorEl(null);
	};
	const menuOptions = [
		{ name: "Services", link: "services" },
		{ name: "Custom Software Development", link: "/customsoftware" },
		{ name: "Mobile App Development", link: "/mobileapps" },
		{ name: "Websites Development", link: "websites" },
	];

	const tabs = (
		<>
			<Tabs
				sx={{ marginLeft: "auto", fontSize: "3rem" }}
				value={value}
				onChange={handleChange}
				textColor="inherit"
			>
				<StyledTab label="Home" component={RouterLink} to="/" />
				<StyledTab
					id="basic-button"
					aria-controls="basic-menu"
					aria-expanded={openMenu ? "true" : undefined}
					onMouseOver={handleClick}
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
				<StyledTab label="Contact Us" component={RouterLink} to="/contact" />
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
		</>
	);

	const drawer = (
		<>
			<SwipeableDrawer
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				onOpen={() => setOpenDrawer(true)}
				PaperProps={{
					sx: {
						backgroundColor: theme.palette.common.blue,
					},
				}}
			>
				<List disablePadding>
					<ListItemButton
						onClick={() => {
							setOpenDrawer(false);
							setValue(0);
						}}
						divider
						component={RouterLink}
						to="/"
					>
						<ListItemText
							sx={{
								...theme.typography.tab,
								opacity: 0.7,
								...(value === 0 && { opacity: 1 }),
							}}
							disableTypography
						>
							Home
						</ListItemText>
					</ListItemButton>
					<ListItemButton
						onClick={() => {
							setOpenDrawer(false);
							setValue(1);
						}}
						divider
						component={RouterLink}
						to="/services"
					>
						<ListItemText
							sx={{
								...theme.typography.tab,
								opacity: 0.7,
								...(value === 1 && { opacity: 1 }),
							}}
							disableTypography
						>
							Services
						</ListItemText>
					</ListItemButton>
					<ListItemButton
						onClick={() => {
							setOpenDrawer(false);
							setValue(2);
						}}
						divider
						component={RouterLink}
						to="/revolution"
					>
						<ListItemText
							sx={{
								...theme.typography.tab,
								opacity: 0.7,
								...(value === 2 && { opacity: 1 }),
							}}
							disableTypography
						>
							The Revolution
						</ListItemText>
					</ListItemButton>
					<ListItemButton
						onClick={() => {
							setOpenDrawer(false);
							setValue(3);
						}}
						divider
						component={RouterLink}
						to="/about"
					>
						<ListItemText
							sx={{
								...theme.typography.tab,
								opacity: 0.7,
								...(value === 3 && { opacity: 1 }),
							}}
							disableTypography
						>
							About Us
						</ListItemText>
					</ListItemButton>
					<ListItemButton
						onClick={() => {
							setOpenDrawer(false);
							setValue(4);
						}}
						divider
						component={RouterLink}
						to="/contact"
					>
						<ListItemText
							sx={{
								...theme.typography.tab,
								opacity: 0.7,
								...(value === 4 && { opacity: 1 }),
							}}
							disableTypography
						>
							Contact Us
						</ListItemText>
					</ListItemButton>
					<ListItemButton
						onClick={() => {
							setOpenDrawer(false);
							setValue(5);
						}}
						sx={{
							...theme.typography.tab,
							opacity: 0.7,
							...(value === 5 && { opacity: 1 }),
						}}
						divider
						component={RouterLink}
						to="/estimate"
					>
						<ListItemText sx={{ ...theme.typography.tab }} disableTypography>
							Free Estimate
						</ListItemText>
					</ListItemButton>
				</List>
			</SwipeableDrawer>
			<IconButton
				onClick={() => setOpenDrawer(!openDrawer)}
				sx={{
					ml: "auto",
					"&:hover": {
						backgroundColor: "transparent",
					},
				}}
				disableRipple
			>
				<MenuIcon sx={{ height: "50px", width: "50px" }} />
			</IconButton>
		</>
	);

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
							<Img
								sx={{
									height: "9em",
									[theme.breakpoints.down("lg")]: {
										height: "6em",
									},
									[theme.breakpoints.down("sm")]: {
										height: "5.5em",
									},
								}}
								src={logo}
								alt="company logo"
							/>
						</Button>
						{matches ? drawer : tabs}

						<Menu
							id="basic-menu"
							anchorEl={anchorEl}
							open={openMenu}
							onClose={handleClose}
							MenuListProps={{ onMouseLeave: handleClose }}
						>
							{menuOptions.map((option, i) => (
								<MenuItem
									key={i}
									onClick={(e) => {
										handleMenuItemClick(e, i);
										setValue(1);
									}}
									divider={i === selectedIndex && value === 1}
									component={RouterLink}
									to={option.link}
								>
									{option.name}
								</MenuItem>
							))}
						</Menu>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<Div />
		</>
	);
}
