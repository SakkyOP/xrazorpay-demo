import { Button } from "@mui/material";
import logo from "../assets/onboarding.png";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useState } from "react";
import OnboardingCard, {StepProps} from "./OnboardingCard";

const data: StepProps[][] = [
  [
    {
      label: "Let's get you started",
      description: `Complete your application and get instant access to your Amazon payouts`,
      buttons: ["APPLY NOW"],
    },
  ],
  [
    {
      label: "Add Balance",
      description: `Add Balance to create payouts in Live mode`,
      buttons: null,
    },
    {
      label: "Create Payout",
      description:
        "There are multiple ways in which you can create the first payout",
      buttons: ["Make a payout", "Show apps for me", "API payouts"],
    },
  ]
]

export default function OnboardingUpdates() {
  const [stepNo, setStepNo] = useState(0)
  const maxSteps = 4;

  function nextStep() {
    if (stepNo == maxSteps) {
      return;
    }
    setStepNo(stepNo + 1)
  }

	return (
		<section className="flex flex-col w-full py-4">
			<h3 className="font-semibold">
				Onboarding updates <span className="font-normal text-[#58637a]">(1)</span>
			</h3>
			<div className="flex justify-start items-center w-full h-48 rounded-lg my-4 bg-raisin_black">
				<img className="h-full rounded-lg" src={logo} />
				<div className="flex flex-col gap-2 mx-6">
					<h1 className="text-2xl">Open your RazorpayX account.</h1>
					<p  className="text-[0.8rem] text-[#58637a]">
						Don't let bankache come in the way of your growth. Apply
						for your RazorpayX account with a few basic steps
					</p>
					<div className="flex items-center justify-between">
            <Button
              variant="contained"
              endIcon={<ArrowRightAltIcon/>}
              onClick={nextStep}
            >
              Start application
            </Button>
            <p className="text-sm text-[#58637a]">{stepNo}/{maxSteps}</p>
          </div>
				</div>
			</div>
      <div className="flex flex-col justify-center items-center">
        <OnboardingCard steps={data[0]}/>
        <OnboardingCard steps={data[1]}/>
      </div>
		</section>
	);
}
