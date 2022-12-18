import { Flex } from "@chakra-ui/react";

import Section from "common/components/layout/Section";

import cards from "./cards";

const MerryCard = () => {
	return (
		<Section title="Christmas symbols mean?" pt={"2rem"}>
			<Flex
				gap={{
					base: "2rem 3rem",
					sm: "2rem 2rem",
					lg: "5rem",
				}}
				mt={{ base: "3rem", md: "6rem" }}
				flexWrap="wrap"
				justifyContent={{ base: "center", md: "space-between" }}
			>
				{cards.map((Card, index) => (
					<Card key={index} />
				))}
			</Flex>
		</Section>
	);
};

export default MerryCard;
