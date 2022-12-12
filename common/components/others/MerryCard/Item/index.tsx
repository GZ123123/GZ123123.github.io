import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { ReactNode, useMemo } from "react";
import Modal from "../../Modal";

import background from "./background.png";

interface ICardItem {
	icon: any;
	title: string;
	children: ReactNode;
	image: StaticImageData;
	ltr?: boolean;
}

const before = {
	content: "''",
	backgroundImage: "url(/icons/stars-icon.svg)",
	backgroundSize: "contain",
	backgroundRepeat: "no-repeat",
	width: "48px",
	height: "48px",
	position: "absolute",
	top: "-24px",
	left: "-24px",
};

const hover = {
	":before": before,
	svg: {
		animation: "shake 1.6s infinite",
	},
};
const CardItem = ({ icon, title, children, image, ltr }: ICardItem) => {
	return (
		<Modal
			size={{ base: "xs", md: "2xl" }}
			anchor={
				<Box overflow={"visible !important"} _hover={hover}>
					<Box
						as="button"
						p={{ base: "1.5rem", md: "4rem" }}
						border="1px solid white"
						borderRadius={"1rem"}
						_focus={hover}
					>
						{icon}
					</Box>
				</Box>
			}
		>
			<Box
				backgroundImage={background.src}
				backgroundSize="cover"
				backgroundPosition={{ base: "top", md: "center" }}
			>
				<Flex
					margin={"55px auto"}
					px={{ base: "28px", md: "0" }}
					maxW={"530px"}
					gap={"1.2rem"}
					direction={{ base: "column-reverse", md: "row" }}
				>
					<Box order={{ base: 0, md: Number(ltr) }}>
						<Center
							as="h4"
							lineHeight={{ base: "140%" }}
							fontSize={{ base: "45px", md: "45px" }}
							fontFamily="iCielKL Soulbeams"
							mb={{ base: "8px" }}
						>
							{title}
						</Center>
						{children}
					</Box>
					<Flex order={{ base: 1, md: Number(!ltr) }} justify={"center"}>
						<Image
							style={{ minWidth: "250px" }}
							src={image}
							alt="santa image"
						/>
					</Flex>
				</Flex>
			</Box>
		</Modal>
	);
};

export default CardItem;
