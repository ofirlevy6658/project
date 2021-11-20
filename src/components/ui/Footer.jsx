import React from "react";
import { styled } from "@mui/system";
import { Grid } from "@mui/material/";
import { Link } from "react-router-dom";
import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

const StyledFooter = styled(`footer`)(({ theme }) => ({
	backgroundColor: theme.palette.common.blue,
	width: "100%",
	zIndex: 1302,
	position: "relative",
}));

const StyledImg = styled(`img`)(({ theme }) => ({
	width: "25em",
	verticalAlign: "bottom",
	[theme.breakpoints.down("md")]: {
		width: "21em",
	},
	[theme.breakpoints.down("xs")]: {
		width: "1em",
	},
}));

const StyledIcon = styled(`img`)(({ theme }) => ({
	height: "4em",
	width: "4em",
	[theme.breakpoints.down("md")]: {
		height: "2.5em",
		width: "2.5em",
	},
}));
export default function Footer({
	value,
	setValue,
	selectedIndex,
	setSelectedIndex,
}) {
	return (
		<StyledFooter>
			<Grid
				justifyContent="center"
				container
				sx={{
					position: "absolute",
					display: { xs: "none", md: "flex" },
				}}
			>
				<Grid item sx={{ margin: "3em" }}>
					<Grid container direction="column" spacing={2}>
						<Grid
							item
							sx={{
								color: "white",
								fontFamily: "Arial",
								fontSize: "0.75rem",
								fontWeight: "bold",
								textDecoration: "none",
							}}
							onClick={() => {
								setValue(0);
								setSelectedIndex(0);
							}}
							component={Link}
							to="/"
						>
							Home
						</Grid>
					</Grid>
				</Grid>
				<Grid item sx={{ margin: "3em" }}>
					<Grid container direction="column" spacing={2}>
						<Grid
							item
							sx={{
								color: "white",
								fontFamily: "Arial",
								fontSize: "0.75rem",
								fontWeight: "bold",
								textDecoration: "none",
							}}
							onClick={() => {
								setValue(1);
								setSelectedIndex(1);
							}}
							component={Link}
							to="/services"
						>
							Services
						</Grid>
						<Grid
							item
							sx={{
								color: "white",
								fontFamily: "Arial",
								fontSize: "0.75rem",
								fontWeight: "bold",
								textDecoration: "none",
							}}
							onClick={() => {
								setValue(1);
								setSelectedIndex(1);
							}}
							component={Link}
							to="/customsoftware"
						>
							Custom Software Development
						</Grid>
						<Grid
							item
							sx={{
								color: "white",
								fontFamily: "Arial",
								fontSize: "0.75rem",
								fontWeight: "bold",
								textDecoration: "none",
							}}
							onClick={() => {
								setValue(1);
								setSelectedIndex(1);
							}}
							component={Link}
							to="/mobileapps"
						>
							Mobile App Development
						</Grid>
						<Grid
							item
							sx={{
								color: "white",
								fontFamily: "Arial",
								fontSize: "0.75rem",
								fontWeight: "bold",
								textDecoration: "none",
							}}
							onClick={() => {
								setValue(1);
								setSelectedIndex(1);
							}}
							component={Link}
							to="/websites"
						>
							Website Development
						</Grid>
					</Grid>
				</Grid>
				<Grid item sx={{ margin: "3em" }}>
					<Grid container direction="column" spacing={2}>
						<Grid
							item
							sx={{
								color: "white",
								fontFamily: "Arial",
								fontSize: "0.75rem",
								fontWeight: "bold",
								textDecoration: "none",
							}}
							onClick={() => {
								setValue(2);
								setSelectedIndex(2);
							}}
							component={Link}
							to="/revolution"
						>
							The Revolution
						</Grid>
						<Grid
							item
							sx={{
								color: "white",
								fontFamily: "Arial",
								fontSize: "0.75rem",
								fontWeight: "bold",
								textDecoration: "none",
							}}
							onClick={() => {
								setValue(2);
								setSelectedIndex(2);
							}}
							component={Link}
							to="/revolution"
						>
							Vision
						</Grid>
						<Grid
							item
							sx={{
								color: "white",
								fontFamily: "Arial",
								fontSize: "0.75rem",
								fontWeight: "bold",
								textDecoration: "none",
							}}
							onClick={() => {
								setValue(2);
								setSelectedIndex(2);
							}}
							component={Link}
							to="/revolution"
						>
							Technology
						</Grid>
						<Grid
							item
							sx={{
								color: "white",
								fontFamily: "Arial",
								fontSize: "0.75rem",
								fontWeight: "bold",
								textDecoration: "none",
							}}
							onClick={() => {
								setValue(2);
								setSelectedIndex(2);
							}}
							component={Link}
							to="/revolution"
						>
							Process
						</Grid>
					</Grid>
				</Grid>
				<Grid item sx={{ margin: "3em" }}>
					<Grid container direction="column" spacing={2}>
						<Grid
							item
							sx={{
								color: "white",
								fontFamily: "Arial",
								fontSize: "0.75rem",
								fontWeight: "bold",
								textDecoration: "none",
							}}
							onClick={() => {
								setValue(3);
								setSelectedIndex(3);
							}}
							component={Link}
							to="/about"
						>
							About Us
						</Grid>
						<Grid
							item
							sx={{
								color: "white",
								fontFamily: "Arial",
								fontSize: "0.75rem",
								fontWeight: "bold",
								textDecoration: "none",
							}}
							onClick={() => {
								setValue(3);
								setSelectedIndex(3);
							}}
							component={Link}
							to="/about"
						>
							History
						</Grid>
						<Grid
							item
							sx={{
								color: "white",
								fontFamily: "Arial",
								fontSize: "0.75rem",
								fontWeight: "bold",
								textDecoration: "none",
							}}
							onClick={() => {
								setValue(3);
								setSelectedIndex(3);
							}}
							component={Link}
							to="/about"
						>
							Team
						</Grid>
					</Grid>
				</Grid>
				<Grid item sx={{ margin: "3em" }}>
					<Grid container direction="column" spacing={2}>
						<Grid
							item
							sx={{
								color: "white",
								fontFamily: "Arial",
								fontSize: "0.75rem",
								fontWeight: "bold",
								textDecoration: "none",
							}}
							onClick={() => {
								setValue(4);
								setSelectedIndex(4);
							}}
							component={Link}
							to="/contact"
						>
							Contact Us
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<StyledImg src={footerAdornment} alt="black decorative slash" />
			<Grid
				container
				component={"a"}
				justifyContent="flex-end"
				spacing={2}
				sx={{
					position: "absolute",
					mt: "-6em",
					right: {
						xs: "0.6em",
						md: "1.5em",
					},
				}}
			>
				<Grid
					item
					component={"a"}
					href="https://www.facebook.com/"
					rel="noopener noreferrer"
					target="_blank"
				>
					<StyledIcon src={facebook} alt="facebook logo" />
				</Grid>
				<Grid
					item
					component={"a"}
					href="https://www.twitter.com/"
					rel="noopener noreferrer"
					target="_blank"
				>
					<StyledIcon src={twitter} alt="twitter logo" />
				</Grid>
				<Grid
					item
					component={"a"}
					href="https://www.instagram.com/"
					rel="noopener noreferrer"
					target="_blank"
				>
					<StyledIcon src={instagram} alt="instagram logo" />
				</Grid>
			</Grid>
		</StyledFooter>
	);
}
