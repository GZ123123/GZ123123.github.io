import { AspectRatio, Box, Flex, Text } from "@chakra-ui/react";
import Section from "common/components/layout/Section";
import GiftItem from "./Item";

const Gift = () => {
	return (
		<Section title="Gift love for u">
			<Flex
				gap={{ base: 0, md: "0.5rem" }}
				flexWrap="wrap"
				justifyContent="space-between"
			>
				<AspectRatio ratio={1} w="30%" maxW="250px">
					<GiftItem> asd asd asd asd asd as 1</GiftItem>
				</AspectRatio>
				<AspectRatio ratio={1} w="30%" maxW="250px">
					<GiftItem> asd 2</GiftItem>
				</AspectRatio>
				<AspectRatio ratio={1} w="30%" maxW="250px">
					<GiftItem> asd 3</GiftItem>
				</AspectRatio>
				<AspectRatio ratio={1} w="30%" maxW="250px">
					<GiftItem> asd 4</GiftItem>
				</AspectRatio>
				<AspectRatio ratio={1} w="30%" maxW="250px">
					<GiftItem> asd 5</GiftItem>
				</AspectRatio>
				<AspectRatio ratio={1} w="30%" maxW="250px">
					<GiftItem> asd 6</GiftItem>
				</AspectRatio>
				<AspectRatio ratio={1} w="30%" maxW="250px">
					<GiftItem> asd 7</GiftItem>
				</AspectRatio>
				<AspectRatio ratio={1} w="30%" maxW="250px">
					<GiftItem> asd 8</GiftItem>
				</AspectRatio>
				<AspectRatio ratio={1} w="30%" maxW="250px">
					<GiftItem> asd 9</GiftItem>
				</AspectRatio>
			</Flex>
		</Section>
		// <Box mt={"4rem"}>
		// 	<Text
		// 		as="h3"
		// 		fontSize={{ base: "3rem", md: "4rem" }}
		// 		textAlign="center"
		// 		sx={{
		// 			":after": {
		// 				content: "'*'",
		// 			},
		// 			":before": {
		// 				content: "'*'",
		// 			},
		// 		}}
		// 	>
		// 		Gift
		// 	</Text>
		// 	<Box>
		// 		<Flex
		// 			gap={{ base: 0, md: "0.5rem" }}
		// 			flexWrap="wrap"
		// 			justifyContent="space-between"
		// 		>
		// 			<AspectRatio ratio={1} w="30%" maxW="250px">
		// 				<GiftItem> asd asd asd asd asd as 1</GiftItem>
		// 			</AspectRatio>
		// 			<AspectRatio ratio={1} w="30%" maxW="250px">
		// 				<GiftItem> asd 2</GiftItem>
		// 			</AspectRatio>
		// 			<AspectRatio ratio={1} w="30%" maxW="250px">
		// 				<GiftItem> asd 3</GiftItem>
		// 			</AspectRatio>
		// 			<AspectRatio ratio={1} w="30%" maxW="250px">
		// 				<GiftItem> asd 4</GiftItem>
		// 			</AspectRatio>
		// 			<AspectRatio ratio={1} w="30%" maxW="250px">
		// 				<GiftItem> asd 5</GiftItem>
		// 			</AspectRatio>
		// 			<AspectRatio ratio={1} w="30%" maxW="250px">
		// 				<GiftItem> asd 6</GiftItem>
		// 			</AspectRatio>
		// 			<AspectRatio ratio={1} w="30%" maxW="250px">
		// 				<GiftItem> asd 7</GiftItem>
		// 			</AspectRatio>
		// 			<AspectRatio ratio={1} w="30%" maxW="250px">
		// 				<GiftItem> asd 8</GiftItem>
		// 			</AspectRatio>
		// 			<AspectRatio ratio={1} w="30%" maxW="250px">
		// 				<GiftItem> asd 9</GiftItem>
		// 			</AspectRatio>
		// 		</Flex>
		// 	</Box>
		// </Box>
	);
};

export default Gift;
