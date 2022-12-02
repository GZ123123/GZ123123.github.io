import { Box, Container, Divider, Flex, Text } from "@chakra-ui/react";

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
					<Box>
						<Box></Box>
						<Box></Box>
						<Box></Box>
					</Box>
					<Text as="p">Made by Dong Chi Team</Text>
				</Flex>
			</Container>
		</Box>
	);
};

export default Footer;
