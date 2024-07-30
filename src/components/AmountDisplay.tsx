import { Button, Divider } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import logo from "../assets/RarzorpayX-small-logo.png";
import CachedIcon from "@mui/icons-material/Cached";

export default function AmountDisplay() {
	return (
		<div className="flex flex-col my-6 w-full">
			<div className="flex justify-start items-center gap-2 text-sm text-[gray]">
				<img className="w-4 aspect-square" src={logo} alt="" />{" "}
				<div className="font-bold">RazorpayX Lite</div>
				<div className="italic ">as of a few seconds ago</div>
				<div className="hover:cursor-pointer">
					<CachedIcon />
				</div>
			</div>
			<div className="flex">
				<div className="flex w-1/2 justify-start items-end">
					<CurrencyRupeeIcon
						sx={{ color: "gray", mb: 0.3, }}
						fontSize="small"
					/>{" "}
					<div className="text-4xl">100.09</div>{" "}
				</div>
				<Divider
					sx={{ mx: 2, backgroundColor: "rgba(255,255,255,0.4)" }}
					orientation="vertical"
					flexItem
				/>{" "}
                <div className="flex justify-start items-center">
                    <Button>+ Add balance</Button>
                </div>
			</div>
		</div>
	);
}
