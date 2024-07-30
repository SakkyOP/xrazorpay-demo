import {
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	ListItemButton,
	Button,
	Chip,
	SvgIconTypeMap,
	Badge,
} from "@mui/material";
import logo from "../assets/RazorpayX-logo.svg";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import ApprovalOutlinedIcon from "@mui/icons-material/ApprovalOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";

import { useState } from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type navlink = {
	name: string;
	icon: OverridableComponent<SvgIconTypeMap>;
	new: boolean;
	sub: navlink | null;
	badge: boolean;
};

const data: navlink[] = [
	{
		name: "Home",
		icon: HomeOutlinedIcon,
		new: false,
		sub: null,
		badge: false,
	},
	{
		name: "Payouts",
		icon: ArrowOutwardIcon,
		new: false,
		sub: null,
		badge: false,
	},
	{
		name: "Account Statement",
		icon: ArticleOutlinedIcon,
		new: false,
		sub: null,
		badge: false,
	},
	{
		name: "Contacts",
		icon: PersonOutlinedIcon,
		new: false,
		sub: null,
		badge: false,
	},
	{
		name: "Loans",
		icon: CurrencyRupeeOutlinedIcon,
		new: true,
		sub: null,
		badge: false,
	},
	{
		name: "VendorPayments",
		icon: ReceiptOutlinedIcon,
		new: false,
		sub: {
			name: "Invoice approvals",
			icon: ArrowForwardIcon,
			new: true,
			sub: null,
			badge: false,
		},
		badge: true,
	},
	{
		name: "Tax Payments",
		icon: ApprovalOutlinedIcon,
		new: false,
		sub: null,
		badge: false,
	},
	{
		name: "Payout Links",
		icon: SendOutlinedIcon,
		new: false,
		sub: null,
		badge: false,
	},
	{
		name: "Payroll",
		icon: DraftsOutlinedIcon,
		new: false,
		sub: null,
		badge: false,
	},
	{
		name: "Reports",
		icon: BookOutlinedIcon,
		new: false,
		sub: null,
		badge: false,
	},
];

export default function Sidebar() {
	const [activeNo, setActiveNo] = useState(0);

	return (
		<div className="flex flex-col bg-dark_raisin_black w-1/5">
			<img className="w-3/5 mt-5 ml-5" src={logo} alt="" />
			<List sx={{ color: "#bdbdbd" }}>
				{data.map((elem, idx) => {
					return (
						<>
							{idx == 4 ? <Divider color="#2e353f" /> : null}
							<ListItem key={idx} className="my-4" disablePadding>
								<ListItemButton
									sx={{
										padding: "1px 1rem",
										backgroundColor:
											activeNo == idx
												? "#2e353f"
												: "inherit",
									}}
									onClick={() => setActiveNo(idx)}>
									{activeNo == idx ? (
										<div className="absolute -left-1 w-2 h-6 bg-[#ADE9CB] rounded-lg" />
									) : null}
									<ListItemIcon
										sx={{
											minWidth: "0",
											marginRight: "10px",
										}}>
										{elem.badge ? (
											<Badge
                        color="primary"
												variant="dot"
												anchorOrigin={{
													vertical: "top",
													horizontal: "left",
												}}>
												<elem.icon
													fontSize="small"
													sx={{ color: activeNo == idx? "#ADE9CB" : "#bdbdbd" }}
												/>
											</Badge>
										) : (
											<elem.icon
												fontSize="small"
												sx={{ color: activeNo == idx? "#ADE9CB" : "#bdbdbd" }}
											/>
										)}
									</ListItemIcon>
									<ListItemText
                    sx={{ color: activeNo == idx? "#ADE9CB" : "#bdbdbd" }}
										primary={
											<>
												{elem.new ? (
													<Chip
														label="NEW"
														size="small"
														sx={{
															backgroundColor:
																"#007E3C",
															color: "white",
															fontSize: "0.8rem",
															mr: 1,
														}}
													/>
												) : null}
												{elem.name}
											</>
										}
									/>
								</ListItemButton>
							</ListItem>
							{elem.sub != null ? (
								<ListItem className="-mt-6 mb-4 ml-8">
									{elem.sub.new ? (
										<Chip
											label="NEW"
											size="small"
											sx={{
												backgroundColor: "#007E3C",
												color: "white",
												fontSize: "0.8rem",
											}}
										/>
									) : null}
									<Button variant="text">
										<span className="mt-1 capitalize">
											Invoice Approvals
										</span>
										<elem.sub.icon fontSize="small" />
									</Button>
								</ListItem>
							) : null}
						</>
					);
				})}
			</List>
		</div>
	);
}
