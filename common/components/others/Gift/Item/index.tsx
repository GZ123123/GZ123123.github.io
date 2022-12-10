import { Box } from "@chakra-ui/react";
import { IconGift, IconGiftHidden } from "public/icons";
import Modal from "../../Modal";

const GiftItem = ({ children }: any) => {
	return (
		<Modal
			size="2xl"
			anchor={
				<Box
					as="button"
					sx={{
						"svg.gift": { display: "inline-block" },
						"svg.gift-hidden": { display: "none" },
					}}
					_hover={{
						"svg.gift": { display: "none" },
						"svg.gift-hidden": { display: "inline-block" },
					}}
				>
					<Box width="200px" height="200px">
						<IconGift className="gift" width="100%" height="100%" />
						<IconGiftHidden
							className="gift-hidden"
							width="100%"
							height="100%"
						/>
					</Box>
				</Box>
			}
		>
			{children}
		</Modal>
	);
};

export default GiftItem;
