import React from "react";
import Lottie from "react-lottie";
import { Grid, Button, Typography } from "@mui/material/";

import ButtonArrow from "./ui/ButtonArrow";
import animationData from "../animations/landinganimation/data";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";

export default function LandingPage() {
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
				{/*-----Services Block-----*/}
				<Grid container>
					<Grid item>
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
								padding: "5px",
							}}
						>
							{" "}
							<span style={{ marginRight: 10 }}>Learn More</span>
							<ButtonArrow width={10} height={10} fill="#0B72B9"></ButtonArrow>
						</Button>
					</Grid>
					<Grid item>
						<img src={customSoftwareIcon} alt="software icon" />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
