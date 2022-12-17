import { Box, Container } from "@chakra-ui/react";
import Section from "common/components/layout/Section";
import { useRouter } from "next/router";
import { IconLetterClose, IconStar } from "public/icons";

const Letter = () => {
	const navigate = useRouter();

	const onClick = () => navigate.push("/wishes");
	return (
		<Section title="Write best wishes">
			<Container maxW={"container.md"} pos="relative">
				<IconLetterClose width="100%" height="100%" />

				<Box
					tabIndex={-1}
					onClick={onClick}
					as="button"
					sx={{ position: "absolute" }}
					top="50%"
					left="50%"
					transform={{
						base: "translate(-50%, calc(50% - 4rem) )",
						md: "translate(-50%, calc(50% - 6rem) )",
					}}
					w={{ base: "6rem", md: "8rem" }}
					h={{ base: "6rem", md: "8rem" }}
				>
					<IconStar
						className="test"
						width="100%"
						height="100%"
						style={{
							animation:
								"star-shake 3s linear infinite, star-shadow 3s steps(4, jump-both) infinite",
						}}
					/>
				</Box>
			</Container>
		</Section>
	);
};

export default Letter;
