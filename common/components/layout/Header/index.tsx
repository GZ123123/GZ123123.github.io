import { Box, Flex, Text } from "@chakra-ui/react";

import Banner from "./banner.svg";

const Header = () => {
	return (
		<Box as="header">
			<Flex justifyContent={"center"} py="4">
				<Flex flexDirection="column">
					<Text as="h1">Merry Christmas</Text>
					<Text as="p">gift love for u</Text>
				</Flex>
			</Flex>
			<Box width={"100%"} my={{ base: "2rem" }}>
				<Banner />
			</Box>
		</Box>
	);
};

export default Header;
