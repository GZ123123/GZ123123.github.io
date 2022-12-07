import { Box, Flex, Text } from "@chakra-ui/react";

// import Banner from "./banner.svg";
import Title from "./title.svg";

import Banner from "./Banner";

const h1After = {
	content: "''",
	position: "absolute",
	right: "-1.5rem",
	top: "25%",
	backgroundImage: "url(/icons/star-icon.svg)",
	backgroundSize: "contain",
	backgroundRepeat: "no-repeat",
	width: "42px",
	height: "42px",
};

const pBefore = {
	content: "''",
	bottom: "10px",
	display: "inline-block",
	padding: "14px",
	margin: "0 14px",
	borderBottom: "3px solid #fff",
};

const pAfter = {
	content: "''",
	bottom: "10px",
	display: "inline-block",
	padding: "14px",
	margin: "0 14px",
	borderBottom: "3px solid #fff",
};

const Header = () => {
	return (
		<Box as="header">
			<Flex
				justifyContent={"center"}
				py={{ base: 0, md: 4 }}
				mb={{ base: "1rem", md: "2rem" }}
			>
				<Flex
					flexDirection="column"
					alignItems={"flex-end"}
					display={{ base: "none", md: "flex" }}
				>
					<Text
						className="bling_after"
						position={"relative"}
						as="h1"
						fontFamily={"MC"}
						fontSize={{ base: "8rem", lg: "12rem" }}
						px={{ base: "3rem" }}
						textAlign={"center"}
						_after={h1After}
					>
						Merry Christmas
					</Text>
					<Text
						_before={pBefore}
						_after={pAfter}
						as="p"
						marginTop={{ base: "0rem", md: "-2rem" }}
						fontSize={{ base: "0.75rem", sm: "1.5rem", lg: "3rem" }}
					>
						gift love for u
					</Text>
				</Flex>
				<Flex width="60%" display={{ base: "flex", md: "none" }}>
					<Title
						width="100%"
						height="100%"
						display={{ base: "block", md: "none" }}
					/>
				</Flex>
			</Flex>
			<Box width={"100%"} mb={{ base: "3rem", sm: "5.5rem" }}>
				<Banner className={"banner active"} />
			</Box>
		</Box>
	);
};

export default Header;
