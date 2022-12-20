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
	active: boolean;
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
		animation:
			"shake-begin 150ms infinite linear, shake 1s infinite linear 150ms",
	},
};

const CardItem = ({ icon, title, children, image, ltr, active }: ICardItem) => {
	return (
		<Modal
			width={{ base: "316px", sm: "595px" }}
			height={{ md: "420px" }}
			size={{ base: "sm", md: "2xl" }}
			anchor={
				<Box overflow={"visible !important"} _hover={hover}>
					<Box
						className={`merry-card ${active ? "active" : ""}`}
						as="button"
						p={{
							base: "1.5rem",
							sm: "2rem",
							md: "3rem",
							lg: "4rem",
						}}
						border="3px solid white"
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
				backgroundSize="contain"
				backgroundPosition={{ base: "top", md: "center" }}
			>
				<Flex
					margin={{ base: "35px auto", md: "55px auto" }}
					px={{ base: "28px", md: "0" }}
					maxW={"547px"}
					gap={"22px"}
					direction={{ base: "column-reverse", md: "row" }}
					alignItems="center"
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
						<Box maxW={{ base: "150px" }} minW={{ base: "100px", md: "250px" }}>
							<Image style={{ width: "100%" }} src={image} alt="santa image" />
						</Box>
					</Flex>
				</Flex>
			</Box>
		</Modal>
	);
};

export default CardItem;
