import { Box, Center, Flex, Progress, Text } from "@chakra-ui/react";
import { IconNext, IconPause, IconPlay, IconPrev } from "public/icons";
import { forwardRef, useImperativeHandle, useState } from "react";

interface IPlayerProps {
	song: ISong;
}

interface ISong {
	name: string;
	lyric: string;
}

const Player = ({ song }: IPlayerProps, ref: any) => {
	const [process, setProcess] = useState(80);

	const [lyric, setLyric] = useState("Justin Bieber, Mariah Carey");

	useImperativeHandle(
		ref,
		() => ({
			play: () => console.log("play"),
			pause: () => console.log("pause"),
		}),
		[]
	);

	return (
		<Box mt={{ base: "1.5rem" }} textAlign="center">
			<Text as="h4" fontSize={{ base: "1.75rem", md: "2.5rem" }}>
				{song.name}
			</Text>
			<Center
				as="p"
				fontFamily={"Dongle"}
				fontSize={{ base: "2rem", md: "2.5rem" }}
				mt="0.5rem"
				height={{ base: "4rem", md: "5rem" }}
			>
				{lyric}
			</Center>
			<Box mt={"1rem"}>
				<Progress
					value={process}
					sx={{
						borderRadius: "5px",
						height: "9px",
						"[role='progressbar']": {
							borderRightRadius: "5px",
							bgColor: "white",
						},
					}}
				/>
				<Flex
					w={"35%"}
					maxW="350px"
					justifyContent="space-between"
					mx="auto"
					mt="1.5rem"
				>
					<Box as="button">
						<IconPrev width="64px" height="64px" />
					</Box>
					<Box as="button">
						<IconPause width="64px" height="64px" />
					</Box>
					<Box as="button">
						<IconNext width="64px" height="64px" />
					</Box>
				</Flex>
			</Box>
		</Box>
	);
};

export default forwardRef(Player);
