import { Box } from "@chakra-ui/react";
import { IconGift, IconGiftHidden } from "public/icons";
import Modal from "../../Modal";

const GiftItem = ({ children }: any) => {
	return (
		<Modal
			anchor={
				<Box
					sx={{
						"&.active": {
							background: "red",
						},
						"svg.gift": {
							display: "inline-block",
						},
						"svg.gift-hidden": {
							display: "none",
						},
					}}
					_hover={{
						"svg.gift": {
							display: "none",
						},
						"svg.gift-hidden": {
							display: "inline-block",
						},
					}}
				>
					<IconGift className="gift" width="200px" height="200px" />
					<IconGiftHidden
						className="gift-hidden"
						width="200px"
						height="200px"
					/>
				</Box>
			}
		>
			{children}
		</Modal>
	);
};

export default GiftItem;
