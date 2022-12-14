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
						// animation: "star-shake 2s infinite",
					}}
					// top={{ base: "52%", md: "41%" }}
					// left={{ base: "46%", md: "41%" }}
					top="50%"
					left="50%"
					transform={{
						base: "translate(-50%, calc(50% - 1rem) )",
						md: "translate(-50%, calc(50% - 6rem) )",
					}}
					w={{ base: "2rem", md: "8rem" }}
					h={{ base: "2rem", md: "8rem" }}
				>
					<IconStar
						className="test"
						width="100%"
						height="100%"
						style={{
							// filter: "drop-shadow(0px 0px 6px rgb(255 255 255 / 0.5))",
							// transition: "filter 2s ease-out",
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
