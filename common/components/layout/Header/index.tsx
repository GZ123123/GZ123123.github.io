import { Box, Flex, Text } from "@chakra-ui/react";

import Banner from "./banner.svg";

const Header = () => {
	return (
		<Box as="header">
			<Flex justifyContent={"center"} py="4">
				<Flex flexDirection="column" alignItems={"flex-end"}>
					<Text
						as="h1"
						fontFamily={"MC"}
						fontSize={{ base: "6rem", lg: "11rem" }}
						textAlign={"center"}
					>
						Merry Christmas
					</Text>
					<Text
						sx={{
							":after": {
								content: "'___'",
							},
							":before": {
								content: "'___'",
							},
						}}
						as="p"
						fontSize={{ base: "0.75rem", sm: "1rem", lg: "2rem" }}
					>
						gift love for u
					</Text>
				</Flex>
			</Flex>
			<Box width={"100%"} my={{ base: "2rem" }}>
				<Banner width="100%" height="350px" />
			</Box>
		</Box>
	);
};

export default Header;
