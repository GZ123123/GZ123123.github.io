import { Box, Center, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ISection {
	title: string;
	children: ReactNode;
}

const before = {
	base: {
		content: "''",
		marginRight: "1rem",
		backgroundImage: "url(/icons/star-icon.svg)",
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		width: "16px",
		height: "16px",
	},
	md: {
		marginLeft: "2.75rem",
		width: "25px !important",
		height: "25px !important",
	},
};

const after = {
	base: {
		content: "''",
		marginLeft: "1rem",
		backgroundImage: "url(/icons/star-icon.svg)",
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		width: "16px",
		height: "16px",
	},
	md: {
		marginLeft: "2.75rem",
		width: "25px !important",
		height: "25px !important",
	},
};

const Section = ({ title, children }: ISection) => {
	return (
		<Box as="section" mt={"4rem"}>
			<Center
				as="h3"
				lineHeight={{ base: "125%", lg: "100%" }}
				fontSize={{ base: "1.5rem", sm: "3rem", md: "4rem" }}
				mb={{ base: "2rem" }}
				textAlign="center"
				_before={before}
				_after={after}
			>
				{title}
			</Center>
			<Box>{children}</Box>
		</Box>
	);
};

export default Section;
