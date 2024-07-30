import { Box } from "@mui/material";

export default function NotificationTray() {
	return (
		<Box component="section" sx={{ borderRadius: "5px", width: "100%",my: 2, color: "#5B6677", p: 2, border: "1px dashed grey" }}>
			🎉 You're all caught up. There are no more items pending on you.
		</Box>
	);
}
