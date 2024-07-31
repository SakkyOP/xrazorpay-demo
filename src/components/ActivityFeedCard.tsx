import CurrencyRupee from "@mui/icons-material/CurrencyRupee";
import { Divider, Typography } from "@mui/material";

export type CardProps = {
	date: string;
	day: string;
	img: string;
	text: string;
};

const wrapNumbersInSpan = (text: string) => {
	// Regular expression to match numbers with commas and optional period at the end
    const numberWithCommaRegex = /(\d{1,2}(?:,\d{2})*(?:,\d{3})*(?=\.\d*|$)|\b\d+(?=\.\d))/g;
    const rupeeRegex = /Rs\./g;
  
    if (!text) return text; // If the text is empty, return it as is
  
    // Split the text by numbers and "Rs."
    const parts = text.split(/(Rs\.|\d{1,2}(?:,\d{2})*(?:,\d{3})*(?=\.\d*|$)|\b\d+(?=\.\d))/g);
    

	return parts.map((part, index) => {
        // console.log(part);
        
		if (rupeeRegex.test(part)) {
            
			return <CurrencyRupee key={index} sx={{ fontSize: 12, mb: 0.5 }} />;
		} else if (numberWithCommaRegex.test(part)) {
            console.log(part);
            const numberWithoutPeriod = part.replace(/\.(?=\d*$)/, '');
			return <span key={index} className="text-white text-lg">{numberWithoutPeriod}</span>;
		} else {
			return part;
		}
	});
};

export default function ActivityFeedCard({ date, day, img, text }: CardProps) {
	return (
		<div className="flex items-center w-full bg-gradient-to-r from-[#1b2029] to-dark_raisin_black font-[Roboto] p-10 gap-4">
			<div className="flex w-1/4 flex-col justify-center items-center">
				<Typography sx={{ textTransform: "uppercase" }} variant="body1">
					{date}
				</Typography>
				<Typography variant="body1" sx={{ color: "#58637a" }}>
					{day}
				</Typography>
			</div>
			<Divider sx={{backgroundColor:"rgba(255,255,255,0.3)"}} orientation="vertical" variant="middle" flexItem />
			<div className="flex items-center w-3/4 gap-2">
				<img src={img} alt="" />
				<Typography variant="subtitle2" sx={{ color: "#58637a" }}>
					{wrapNumbersInSpan(text)}
				</Typography>
			</div>
		</div>
	);
}
