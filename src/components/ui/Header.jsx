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

const StyledButton = styled(Button)(({ theme }) => ({
	borderRadius: "50px",
	height: "45px",
	...theme.typography.estimate,
	marginLeft: "50px",
	marginRight: "25px",
	"&:hover": {
		backgroundColor: theme.palette.secondary.light,
	},
}));

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

	const menuOptions = [
		{ name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
		{
			name: "Custom Software Development",
			link: "/customsoftware",
			activeIndex: 1,
			selectedIndex: 1,
		},
		{
			name: "iOS/Android App Development",
			link: "/mobileapps",
			activeIndex: 1,
			selectedIndex: 2,
		},
		{
			name: "Website Development",
			link: "/websites",
			activeIndex: 1,
			selectedIndex: 3,
		},
	];

	const routes = [
		{ name: "Home", link: "/", activeIndex: 0 },
		{
			name: "Services",
			link: "/services",
			activeIndex: 1,
			ariaOwns: anchorEl ? "simple-menu" : undefined,
			ariaPopup: anchorEl ? "true" : undefined,
			mouseOver: (event) => handleClick(event),
		},
		{ name: "The Revolution", link: "/revolution", activeIndex: 2 },
		{ name: "About Us", link: "/about", activeIndex: 3 },
		{ name: "Contact Us", link: "/contact", activeIndex: 4 },
	];

	useEffect(() => {
		[...menuOptions, ...routes].forEach((route) => {
			switch (window.location.pathname) {
				case `${route.link}`:
					if (value !== route.activeIndex) {
						setValue(route.activeIndex);
						if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
							setSelectedIndex(route.selectedIndex);
						}
					}
					break;
				default:
					break;
			}
		});
	}, [value, selectedIndex]);

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

	const tabs = (
		<>
			<Tabs
				sx={{ marginLeft: "auto", fontSize: "3rem" }}
				value={value}
				onChange={handleChange}
				textColor="inherit"
			>
				{routes.map((route, index) => (
					<Tab
						key={`${route}${index}`}
						sx={{ ...theme.typography.tab, minWidth: 10, marginLeft: "25px" }}
						component={RouterLink}
						to={route.link}
						label={route.name}
						aria-owns={route.ariaOwns}
						aria-haspopup={route.ariaPopup}
						onMouseOver={route.mouseOver}
					/>
				))}
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
				<Div />
				<List disablePadding>
					{routes.map((route, index) => (
						<ListItemButton
							key={`${route}${route.activeIndex}`}
							onClick={() => {
								setOpenDrawer(false);
								setValue(index);
							}}
							divider
							component={RouterLink}
							to={route.link}
						>
							<ListItemText
								sx={{
									...theme.typography.tab,
									opacity: 0.7,
									...(value === index && { opacity: 1 }),
								}}
								disableTypography
							>
								{route.name}
							</ListItemText>
						</ListItemButton>
					))}
					<ListItemButton
						onClick={() => {
							setOpenDrawer(false);
							setValue(5);
						}}
						sx={{
							backgroundColor: theme.palette.common.orange,
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
				<AppBar position="fixed" sx={{ zIndex: theme.zIndex.modal + 1 }}>
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
							keepMounted
							sx={{ zIndex: 1302 }}
						>
							{menuOptions.map((option, i) => (
								<MenuItem
									key={`${option}${i}`}
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
