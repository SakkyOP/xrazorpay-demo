import { Button, Divider, Menu, MenuItem } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CampaignIcon from "@mui/icons-material/Campaign";
import SearchIcon from "@mui/icons-material/Search";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import React from "react";

export default function TopBar() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className="w-full flex items-end justify-end p-5">
			<div className="flex items-center justify-center gap-4">
				<Button
					variant="contained"
					id="demo-customized-button"
					aria-controls={open ? "demo-customized-menu" : undefined}
					aria-haspopup="true"
					aria-expanded={open ? "true" : undefined}
					disableElevation
					onClick={handleClick}
					endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}>
					<div className="pt-1">+ Payload</div>
					<Divider sx={{ mx: 1 }} orientation="vertical" flexItem />
				</Button>
				<Menu
					elevation={0}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "right",
					}}
					transformOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
					id="demo-customized-menu"
					MenuListProps={{
						"aria-labelledby": "demo-customized-button",
					}}
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}>
					<MenuItem onClick={handleClose} disableRipple>
						Lorem Ipsum
					</MenuItem>
				</Menu>
				<div className="hover:cursor-pointer">
					<SearchIcon fontSize="large" />
				</div>
				<div className="hover:cursor-pointer">
					<CampaignIcon sx={{ color: "orange" }} fontSize="large" />
				</div>
				<div className="hover:cursor-pointer">
					<ManageAccountsIcon fontSize="large" />
				</div>
			</div>
		</div>
	);
}
