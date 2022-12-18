import { Box, Container, Divider, Flex, Icon, Text } from "@chakra-ui/react";
import { IconFacebook, IconIntagram, IconLinkedin } from "public/icons";

const Footer = () => {
	return (
		<Box as="footer" mt="4rem">
			<Container maxW={"container.md"}>
				<Box>
					<Text
						as="h4"
						textAlign="center"
						fontSize={{ base: "2rem", md: "2.5rem" }}
					>
						A little cuteness for Christmas
					</Text>
				</Box>
				<Divider my={3} variant="think" />
				<Flex justifyContent="space-between" alignItems="center">
					<Flex>
						<Box
							width={{ base: "42px", md: "50px" }}
							height={{ base: "42px", md: "50px" }}
						>
							<IconIntagram style={{ width: "100%", height: "100%" }} />
						</Box>
						<Box
							width={{ base: "42px", md: "50px" }}
							height={{ base: "42px", md: "50px" }}
						>
							<IconLinkedin style={{ width: "100%", height: "100%" }} />
						</Box>
						<Box
							width={{ base: "42px", md: "50px" }}
							height={{ base: "42px", md: "50px" }}
						>
							<IconFacebook style={{ width: "100%", height: "100%" }} />
						</Box>
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
