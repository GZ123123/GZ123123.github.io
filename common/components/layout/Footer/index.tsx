import { Box, Container, Divider, Flex, Icon, Text } from "@chakra-ui/react";
import { IconFacebook, IconIntagram, IconLinkedin } from "public/icons";

const Footer = () => {
	return (
		<Box as="footer" mt={{ base: 2, md: "4rem" }}>
			<Container maxW={"container.md"}>
				<Box>
					<Text as="h4" textAlign="center" fontSize={{ base: "2.5rem" }}>
						A little cuteness for Christmas
					</Text>
				</Box>
				<Divider my={3} variant="think" />
				<Flex justifyContent="space-between" alignItems="center">
					<Flex>
						<IconIntagram width="50" height="50" />
						<IconLinkedin width="50" height="50" />
						<IconFacebook width="50" height="50" />
					</Flex>
					<Text as="p" fontSize={{ base: "1.25rem" }}>
						Made by Dong Chi Team
					</Text>
				</Flex>
			</Container>
		</Box>
	);
};

export default Footer;
