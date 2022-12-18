import { Flex, useMediaQuery } from "@chakra-ui/react";

import Section from "common/components/layout/Section";
import { useEffect, useState } from "react";

import cards from "./cards";

const MerryCard = () => {
	const [isSmallerThanMD] = useMediaQuery("(max-width: 48em)");
	const [id, setId] = useState<any>(null);
	const [current, setCurrent] = useState<number | null>(null);

	useEffect(() => {
		if (isSmallerThanMD && !id) {
			let _current = 0;
			setCurrent(_current);
			setId(
				setInterval(() => {
					_current = (_current + 1) % 6;
					setCurrent(_current);
				}, 2000)
			);
		} else {
			clearInterval(id);
			setCurrent(null);
		}
	}, [isSmallerThanMD]);

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
				justifyContent={{ base: "space-evenly", md: "space-between" }}
			>
				{cards.map((Card, index) => (
					<Card key={index} active={current === index} />
				))}
			</Flex>
		</Section>
	);
};

export default MerryCard;
