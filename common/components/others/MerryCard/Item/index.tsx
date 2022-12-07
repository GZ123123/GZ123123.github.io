import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import Modal from "../../Modal";

interface ICardItem {
	icon: any;
	title: string;
	children: ReactNode;
	image: StaticImageData;
	ltr?: boolean;
}

const CardItem = ({ icon, title, children, image }: ICardItem) => {
	return (
		<Modal
			anchor={
				<Box
					p={{ base: "1.5rem", md: "4rem" }}
					border="1px solid white"
					borderRadius={"1rem"}
				>
					{icon}
				</Box>
			}
		>
			<Flex direction={{ base: "column-reverse", md: "row" }}>
				<Box>
					<Center as="h4">{title}</Center>
					{children}
				</Box>
				<Flex justify={"center"}>
					<Image
						style={{
							minWidth: "300px",
						}}
						src={image}
						alt="santa image"
					/>
				</Flex>
			</Flex>
		</Modal>
	);
};

export default CardItem;
