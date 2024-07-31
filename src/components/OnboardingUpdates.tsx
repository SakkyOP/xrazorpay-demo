import { Button } from "@mui/material";
import logo from "../assets/onboarding.png";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useState } from "react";

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
		<section className="flex flex-col w-full">
			<h3>
				Onboarding updates <span>(1)</span>
			</h3>
			<div className="flex justify-start items-center w-full h-48 rounded-lg my-2 bg-raisin_black">
				<img className="h-full" src={logo} />
				<div className="flex flex-col gap-2 mx-6">
					<h1 className="text-2xl">Open your RazorpayX account.</h1>
					<p  className="text-[0.8rem]">
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
            <p>{stepNo}/{maxSteps}</p>
          </div>
				</div>
			</div>
      <div className="flex flex-col justify-center items-center">
        
      </div>
		</section>
	);
}
