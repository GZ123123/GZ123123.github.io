import { Box, Center, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ISection {
	title: string;
	children: ReactNode;
}

const style = {
	":after": {
		content: "'*'",
	},
	":before": {
		content: "'*'",
	},
};

const Section = ({ title, children }: ISection) => {
	return (
		<Box as="section" mt={"4rem"}>
			<Center
				as="h3"
				fontSize={{ base: "3rem", md: "4rem" }}
				textAlign="center"
				sx={style}
			>
				{title}
			</Center>
			<Box>{children}</Box>
		</Box>
	);
};

export default Section;
