import { ArrowDownward } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ExpandMore from "@mui/icons-material/ExpandMore";
import ActivityFeedCard, { CardProps } from "./ActivityFeedCard";
import activityLogo from "../assets/activity-logo.png";


const data: CardProps[] = [
  {
    date: "23 Jul",
    day: "Tuesday",
    img: activityLogo,
    text: "1 contact created"
  },
  {
    date: "9 Jul",
    day: "Tuesday",
    img: activityLogo,
    text: "Rs. 300.00 credited into the account"
  },
  {
    date: "1 Jul",
    day: "Monday",
    img: activityLogo,
    text: "1 payout worth Rs. 2,36,695.00 created"
  },
  {
    date: "24 Jun",
    day: "Monday",
    img: activityLogo,
    text: ""
  },
]

export default function ActivityFeed() {
	return (
		<div className="flex flex-col justify-center items-center p-8 my-4 relative bg-dark_raisin_black w-full rounded-sm">
			<div className="flex justify-between items-center w-full">
        <div className="flex justify-evenly items-center gap-2">
          <Typography variant="h6" sx={{mt:0.5}}>Activity Feed</Typography>
          <Typography sx={{color: "#58637a"}} variant="subtitle1"><InfoOutlinedIcon fontSize="small" /> updated a few seconds ago</Typography>
        </div>
        <Button
          endIcon={<ExpandMore/>}
        >
          <Typography sx={{mt:0.3, textTransform: "none"}} variant="button">Show filters</Typography>          
        </Button>
      </div>
			<div className="flex flex-col justify-center items-center w-4/5 my-4 gap-4">
        {data.map((elem, idx)=>{
          return <ActivityFeedCard key={idx} date={elem.date} day={elem.day} img={elem.img} text={elem.text} />
        })}
      </div>
			<Button variant="contained" sx={{ width: "fit-content", backgroundColor: "#2c313a" }} endIcon={<ArrowDownward/>}>
				Look For Older Activities
			</Button>
		</div>
	);
}
