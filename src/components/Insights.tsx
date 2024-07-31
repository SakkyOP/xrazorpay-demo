import { ArrowRightAltOutlined, CurrencyRupee } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";

export default function Insights() {
	return (
		<section className="flex flex-col justify-center items-center my-4  w-full">
			<div className="flex justify-between items-center w-full">
				<Typography variant="h6">Insights</Typography>
				<Button
					sx={{ textTransform: "none" }}
					endIcon={<ArrowRightAltOutlined />}>
					Detailed insights
				</Button>
			</div>
			<div className="flex flex-col bg-dark_raisin_black w-full p-6 rounded-sm">
				<div className="flex flex-col">
					<Typography sx={{fontSize:12, color:"#58637a"}} variant="subtitle2">Payout volume - last 30 days</Typography>
          <Typography sx={{fontSize:12, color:"#58637a"}} variant="subtitle2"><CurrencyRupee sx={{fontSize: 12}} /> <span className="text-white text-xl">236,695</span>.00 </Typography>
				</div>
			</div>
		</section>
	);
}
