import { Box, Container } from "@chakra-ui/react";
import Section from "common/components/layout/Section";
import { useRouter } from "next/router";
import { IconLetterClose, IconStar } from "public/icons";

const Letter = () => {
	const navigate = useRouter();

	const onClick = () => navigate.push("/wishes");
	return (
		<Section title="Write best wishes" pt="2rem">
			<Container
				maxW={"container.md"}
				pos="relative"
				mt={{ base: "2rem", md: "6rem" }}
			>
				<IconLetterClose width="100%" height="100%" />

				<Box
					tabIndex={-1}
					onClick={onClick}
					as="button"
					sx={{ position: "absolute" }}
					top="50%"
					left="50%"
					transform={{
						base: "translate(-50%, calc(50% - 2rem) )",
						sm: "translate(-50%, calc(50% - 3rem) )",
						md: "translate(-50%, calc(50% - 6rem) )",
					}}
					w={{ base: "3rem", sm: "5rem", md: "8rem" }}
					h={{ base: "3rem", sm: "5rem", md: "8rem" }}
				>
					<IconStar
						className="test"
						width="100%"
						height="100%"
						style={{
							animation:
								"star-shake-begin 500ms linear, star-shake 2s infinite linear 500ms",
						}}
					/>
				</Box>
			</Container>
		</Section>
	);
};

export default Letter;
