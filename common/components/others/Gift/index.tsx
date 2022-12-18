import { Flex } from "@chakra-ui/react";
import Section from "common/components/layout/Section";

import cards from "./cards";

const Gift = () => {
	return (
		<Section title="Gift love for u" pt={"2rem"}>
			<Flex
				gap={{ base: 0, md: "0.5rem" }}
				flexWrap="wrap"
				justifyContent="space-between"
			>
				{cards.map((Card, index) => (
					<Card key={index} />
				))}
			</Flex>
		</Section>
	);
};

export default Gift;
