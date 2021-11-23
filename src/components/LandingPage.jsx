import React from "react";
import Lottie from "react-lottie";
import {
	Grid,
	Button,
	Typography,
	Card,
	CardContent,
	useMediaQuery,
} from "@mui/material/";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";

import ButtonArrow from "./ui/ButtonArrow";
import animationData from "../animations/landinganimation/data";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
import repeatingBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";

const Img = styled("img")``;
const Div = styled("img")``;
const StyledCard = styled(Card)(({ theme }) => ({
	backgroundColor: "white",
	position: "absolute",
	boxShadow: theme.shadows[10],
	borderRadius: "15px",
	padding: "10em",
	[theme.breakpoints.down("sm")]: {
		paddingTop: "8em",
		paddingBottom: "8em",
		paddingRight: 0,
		paddingLeft: 0,
		width: "100%",
		borderRadius: 0,
	},
}));

export default function LandingPage() {
	const theme = useTheme();
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return (
		<Grid
			container
			direction="column"
			sx={{
				mt: {
					xs: "3em",
					md: "5em",
				},
			}}
		>
			<Grid item>
				{/*-----Hero Block-----*/}
				<Grid container justifyContent="flex-end" alignItems="center">
					<Grid
						sm
						item
						sx={{
							minWidth: "21.5em",
							ml: {
								xs: "0em",
								sm: "1em",
							},
						}}
					>
						<Typography variant="h2" align="center">
							Bringing West Coast Technology
							<br /> to the Midwest
						</Typography>
						<Grid container justifyContent="center">
							<Grid item>
								<Button
									variant="contained"
									sx={{
										typography: "estimate",
										bgcolor: "common.orange",
										borderRadius: 50,
										height: 45,
										width: 145,
										mr: "40px",
										"&:hover": {
											bgcolor: "secondary.light",
										},
									}}
								>
									Free Estimate
								</Button>
							</Grid>
							<Grid item>
								<Button
									variant="outlined"
									sx={{
										fontSize: "0.9rem",
										height: 45,
										width: 145,
										typography: "learnButton",
									}}
								>
									<span style={{ marginRight: 10 }}>Learn More</span>
									<ButtonArrow
										width={15}
										height={15}
										fill="#0B72B9"
									></ButtonArrow>
								</Button>
							</Grid>
						</Grid>
					</Grid>
					<Grid
						item
						sm
						sx={{
							minWidth: "21em",
							marginTop: "2em",
							marginLeft: "10%",
							maxWidth: {
								xs: "30em",
								sm: "50em",
							},
						}}
					>
						<Lottie
							options={defaultOptions}
							height={"100%"}
							width={"100%"}
						></Lottie>
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				{/*-----Custom Software block-----*/}
				<Grid
					container
					sx={{
						mt: "12em",
						p: {
							xs: "25px",
							sm: "0",
						},
					}}
					justifyContent={matchesSM ? "center" : null}
				>
					<Grid
						item
						sx={{
							ml: matchesSM ? 0 : "5em",
							textAlign: matchesSM ? "center" : null,
						}}
					>
						<Typography variant="h4">Custom Software Development</Typography>
						<Typography variant="subtitle1" sx={{ mb: "1em" }}>
							Save Energy. Save Time. Save Money.
						</Typography>
						<Typography variant="subtitle1">
							Complete digital solutions, from investigation to{" "}
							<span style={{ fontFamily: "Pacifico", color: "#FFBA60" }}>
								celebration
							</span>
						</Typography>
						<Button
							variant="outlined"
							sx={{
								typography: "learnButton",
								fontSize: "0.7rem",
								height: "35px",
								p: "5px",
								mb: {
									xs: "2em",
									sm: 0,
								},
							}}
						>
							{" "}
							<span style={{ marginRight: 10 }}>Learn More</span>
							<ButtonArrow width={10} height={10} fill="#0B72B9"></ButtonArrow>
						</Button>
					</Grid>
					<Grid item>
						<Img
							sx={{
								marginLeft: {
									sx: "0em",
									sm: "2em",
								},
							}}
							src={customSoftwareIcon}
							alt="software icon"
						/>
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				{/*-----iOS/Android Block-----*/}
				<Grid
					container
					sx={{
						mt: "12em",
						p: {
							xs: "25px",
							sm: "0",
						},
					}}
					justifyContent={matchesSM ? "center" : "flex-end"}
				>
					<Grid
						item
						sx={{
							textAlign: matchesSM ? "center" : null,
						}}
					>
						<Typography variant="h4">iOS/Android App Development</Typography>
						<Typography variant="subtitle1" sx={{ mb: "1em" }}>
							Extend Functionality. Extend Access. Increase Engagement.
						</Typography>
						<Typography variant="subtitle1">
							Integrate your web experience or create a standalone app
							{matchesSM ? null : <br />}with either mobile platform.
						</Typography>

						<Button
							variant="outlined"
							sx={{
								typography: "learnButton",
								fontSize: "0.7rem",
								height: "35px",
								p: "5px",
								mb: {
									xs: "2em",
									sm: 0,
								},
							}}
						>
							{" "}
							<span style={{ marginRight: 10 }}>Learn More</span>
							<ButtonArrow width={10} height={10} fill="#0B72B9"></ButtonArrow>
						</Button>
					</Grid>
					<Grid item sx={{ mr: matchesSM ? 0 : "5em" }}>
						<Img
							sx={{
								marginLeft: {
									sx: "0em",
									sm: "2em",
								},
							}}
							src={mobileAppsIcon}
							alt="mobile icon"
						/>
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				{/*-----Custom websites block-----*/}
				<Grid
					container
					sx={{
						mt: "12em",
						p: {
							xs: "25px",
							sm: "0",
						},
					}}
					justifyContent={matchesSM ? "center" : null}
				>
					<Grid
						item
						sx={{
							ml: matchesSM ? 0 : "5em",
							textAlign: matchesSM ? "center" : null,
						}}
					>
						<Typography variant="h4">Website Development</Typography>
						<Typography variant="subtitle1" sx={{ mb: "1em" }}>
							Reach More. Discover More. Sell More.
						</Typography>
						<Typography variant="subtitle1">
							Optimized for Search Engines, built for speed.
						</Typography>
						<Button
							variant="outlined"
							sx={{
								typography: "learnButton",
								fontSize: "0.7rem",
								height: "35px",
								p: "5px",
								mb: {
									xs: "2em",
									sm: 0,
								},
							}}
						>
							{" "}
							<span style={{ marginRight: 10 }}>Learn More</span>
							<ButtonArrow width={10} height={10} fill="#0B72B9"></ButtonArrow>
						</Button>
					</Grid>
					<Grid item>
						<Img
							sx={{
								marginLeft: {
									sx: "0em",
									sm: "2em",
								},
							}}
							src={websitesIcon}
							alt="website icon"
						/>
					</Grid>
				</Grid>
			</Grid>
			{/*-----Hero Block-----*/}
			<Grid item>
				<Grid
					container
					alignItems="center"
					justifyContent="center"
					sx={{ height: "100em", mt: "12em" }}
				>
					<StyledCard>
						<CardContent direction="column" sx={{ textAlign: "center" }}>
							<Grid item>
								<Typography variant="h3" gutterBottom>
									The Revolution
								</Typography>
							</Grid>
							<Grid item>
								<Typography variant="subtitle1" gutterBottom>
									Visionary insights coupled with cutting-edge technology is a
									recipe for revolution.
								</Typography>
								<Button
									variant="outlined"
									sx={{
										fontSize: "0.9rem",
										height: 45,
										width: 145,
										typography: "learnButton",
									}}
								>
									<span style={{ marginRight: 10 }}>Learn More</span>
									<ButtonArrow
										width={15}
										height={15}
										fill="#0B72B9"
									></ButtonArrow>
								</Button>
							</Grid>
						</CardContent>
					</StyledCard>
					<Div
						sx={{
							backgroundImage: `url(${repeatingBackground})`,
							backgroundPosition: "center",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							height: "100%",
							width: "100%",
						}}
					/>
				</Grid>
			</Grid>
			<Grid item>
				{/*-----Information Block-----*/}
				<Grid container sx={{ height: "80em" }} alignItems="center">
					<Grid
						item
						container
						sx={{
							position: "absolute",
							textAlign: matchesXS ? "center" : "inherit",
						}}
						direction={matchesXS ? "column" : "row"}
					>
						<Grid item sm sx={{ ml: matchesSM ? "5em" : "2em" }}>
							<Grid container direction="column">
								<Typography variant="h2" sx={{ color: "white" }}>
									About Us
								</Typography>
								<Typography variant="subtitle2">Let's get personal</Typography>
								<Grid item>
									<Button
										variant="outlined"
										sx={{
											typography: "learnButton",
											fontSize: "0.7rem",
											height: "35px",
											color: "white",
											borderColor: "white",
											p: "5px",
											mb: {
												xs: "2em",
												sm: 0,
											},
										}}
									>
										{" "}
										<span style={{ marginRight: 10 }}>Learn More</span>
										<ButtonArrow
											width={10}
											height={10}
											fill="white"
										></ButtonArrow>
									</Button>
								</Grid>
							</Grid>
						</Grid>
						<Grid
							item
							sm
							sx={{
								marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
								textAlign: matchesXS ? "center" : "right",
							}}
						>
							<Grid container direction="column">
								<Typography variant="h2" sx={{ color: "white" }}>
									Contact Us
								</Typography>
								<Typography variant="subtitle2">Say hello! 👋🏻</Typography>
								<Grid item>
									<Button
										variant="outlined"
										sx={{
											typography: "learnButton",
											fontSize: "0.7rem",
											height: "35px",
											color: "white",
											borderColor: "white",
											p: "5px",
											mb: {
												xs: "2em",
												sm: 0,
											},
										}}
									>
										{" "}
										<span style={{ marginRight: 10 }}>Learn More</span>
										<ButtonArrow
											width={10}
											height={10}
											fill="white"
										></ButtonArrow>
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>

					<Div
						sx={{
							backgroundImage: `url(${infoBackground})`,
							backgroundPosition: "center",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							height: "100%",
							width: "100%",
						}}
					/>
				</Grid>
			</Grid>
		</Grid>
	);
}
