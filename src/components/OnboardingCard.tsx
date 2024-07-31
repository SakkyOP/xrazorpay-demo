import { Check } from "@mui/icons-material";
import {
	Box,
	Button,
	Divider,
	Step,
	StepContent,
	StepLabel,
	StepIconProps,
	Stepper,
	Typography,
	styled,
} from "@mui/material";
import React from "react";

export type StepProps = {
	title: string;
	label: string;
	description: string;
	buttons: string[] | null;
};

type CardProps = {
	steps: StepProps[];
};

const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
	({ ownerState }) => ({
		...(ownerState.active && {
			color: "#5c84db",
		}),
		"& .QontoStepIcon-completedIcon": {
			width: "1rem",
			height: "1rem",
			color: "#5c84db",
			zIndex: 1,
		},
		"& .QontoStepIcon-circle": {
			width: "1.5rem",
			height: "1.5rem",
			borderRadius: "50%",
			backgroundColor: "#354770",
		},
		"& .QontoStepIcon-inner-circle": {
			width: "1rem",
			height: "1rem",
			borderRadius: "50%",
			backgroundColor: "#3373ff",
		},
	})
);

function QontoStepIcon(props: StepIconProps) {
	const { active, completed, className } = props;

	return (
		<QontoStepIconRoot ownerState={{ active }} className={className}>
			{completed ? (
				<div className="QontoStepIcon-circle grid place-items-center">
					<Check className="QontoStepIcon-completedIcon" />
				</div>
			) : (
				<div className="QontoStepIcon-circle grid place-items-center">
					<div className="QontoStepIcon-inner-circle" />
				</div>
			)}
		</QontoStepIconRoot>
	);
}

export default function OnboardingCard({ steps }: CardProps) {
	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	return (
		<div className="flex w-full min-h-48 bg-dark_raisin_black justify-start p-4 border-t-2 border-t-[#007E3C]">
			<h1 className="w-2/6 mr-6 pt-2 pl-2 text-3xl font-[Roboto] font-semibold">
				{steps[0].title}
			</h1>
			<div className="flex w-4/6 flex-col ">
				<Stepper activeStep={activeStep} orientation="vertical">
					{steps.map((step, index) => (
						<Step key={step.label}>
							<StepLabel
								sx={{
									color: "#fff",
								}}
								StepIconComponent={QontoStepIcon}>
								<Typography
									color={
										activeStep == index ? "#fff" : "gray"
									}
									variant="h6">
									{step.label}
								</Typography>
								{activeStep <= index ? null : (
									<Divider sx={{ backgroundColor: "gray" }} />
								)}
							</StepLabel>
							<StepContent>
								<Typography color="#58637a" variant="subtitle2">
									{step.description}
								</Typography>
								<Box>
									<div>
										<Button
											variant="contained"
											onClick={handleNext}
											sx={{ mt: 1, mr: 1 }}>
											{step.buttons != null
												? step.buttons[0]
												: "Start"}
										</Button>
										{step.buttons &&
										step.buttons.length > 1 ? (
											<>
												{step.buttons.map(
													(button, idx) => {
														if (idx > 0) {
															return (
																<Button
																	key={idx}
																	sx={{
																		backgroundColor:
																			"#2e353f",
																		color: "#fff",
																		mt: 1,
																		mr: 1,
																	}}
																	variant="contained">
																	{button}
																</Button>
															);
														}
													}
												)}
											</>
										) : null}
									</div>
								</Box>
							</StepContent>
						</Step>
					))}
				</Stepper>
			</div>
		</div>
	);
}
