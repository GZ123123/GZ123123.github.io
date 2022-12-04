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
		<Modal anchor={<Box>{icon}</Box>}>
			<Flex direction={{ base: "column-reverse", md: "row" }} gap={8} p="2rem">
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
