import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { IconGift, IconGiftHidden } from "public/icons";
import Modal from "../../Modal";

const GiftItem = ({ children, images, alt, top, left, width }: any) => {
	return (
		<Modal
			size={{ base: "xs", md: "3xl" }}
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
					<Box width={{ md: "200px" }} height={{ md: "200px" }}>
						<IconGift className="gift" width="100%" height="100%" />
						<IconGiftHidden
							className="gift-hidden"
							width="100%"
							height="100%"
						/>
					</Box>
				</Box>
			}
			borderRadius={{ base: "10px", md: "0" }}
		>
			<Box display={{ base: "none", md: "inline-block" }}>
				<Image style={{ width: "100%" }} src={images[0]} alt={alt} />
			</Box>
			<Box display={{ base: "inline-block", md: "none" }}>
				<Image
					style={{ width: "100%", borderRadius: "10px" }}
					src={images[1] || images[0]}
					alt={alt}
				/>
			</Box>
			<Box pos={"absolute"} top={top || 0} left={left || 0} width={width}>
				{children}
			</Box>
		</Modal>
	);
};

export default GiftItem;
