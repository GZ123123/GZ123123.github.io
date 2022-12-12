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
					sx={{
						position: "absolute",
						animation: "shake 1.6s infinite",
					}}
					top={{ base: "52%", md: "41%" }}
					left={{ base: "46%", md: "41%" }}
					transform={{
						base: "translate(-50%, calc(50% - 1rem) )",
						md: "translate(-50%, calc(50% - 6rem) )",
					}}
					w={{ base: "2rem", md: "8rem" }}
					h={{ base: "2rem", md: "8rem" }}
				>
					<IconStar width="100%" height="100%" />
				</Box>
			</Container>
		</Section>
	);
};

export default Letter;
