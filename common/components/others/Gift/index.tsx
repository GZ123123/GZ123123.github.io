import { Flex } from "@chakra-ui/react";
import Section from "common/components/layout/Section";

import cards from "./cards";

const Gift = () => {
	return (
		<Section title="Gift love for u" pt={{ base: "1rem", md: "2rem" }}>
			<Flex
				mt={{ base: "0.5rem", md: "0rem" }}
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
