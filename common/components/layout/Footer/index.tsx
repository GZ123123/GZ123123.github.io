import { Box, Container, Divider, Flex, Icon, Text } from "@chakra-ui/react";
import { IconFacebook, IconIntagram, IconLinkedin } from "public/icons";

const Footer = () => {
	return (
		<Box as="footer">
			<Container maxW={"container.md"}>
				<Box>
					<Text as="h4" textAlign="center">
						A little cuteness for Christmas
					</Text>
				</Box>
				<Divider my={2} variant="think" />
				<Flex justifyContent="space-between">
					<Flex>
						<IconFacebook width="32" height="32" />
						<IconLinkedin width="32" height="32" />
						<IconIntagram width="32" height="32" />
					</Flex>
					<Text as="p">Made by Dong Chi Team</Text>
				</Flex>
			</Container>
		</Box>
	);
};

export default Footer;
