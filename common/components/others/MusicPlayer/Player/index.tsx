import {
	Box,
	Center,
	Flex,
	Progress,
	Text,
	VisuallyHidden,
} from "@chakra-ui/react";
import { IconNext, IconPause, IconPlay, IconPrev } from "public/icons";
import {
	forwardRef,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from "react";

interface IPlayerProps {
	song: ISong;
}

interface ISong {
	name: string;
	src: string;
	lyric: string;
}

const Player = ({ song }: IPlayerProps, ref: any) => {
	const audio = useRef<any>();

	const [process, setProcess] = useState(80);

	const [lyric, setLyric] = useState("Justin Bieber, Mariah Carey");

	const play = () => {
		console.log(audio.current);
	};

	const pause = () => {
		console.log(audio.current);
	};

	const togglePlay = () => {
		console.log(audio.current.play());
	};

	const onDurationChange = (e: any) => {
		console.log(e);
	};

	const prev = () => {};

	const next = () => {};

	useImperativeHandle(ref, () => ({ play, pause }), []);

	useEffect(() => {
		audio.current?.addEventListener("timeupdate", onDurationChange);

		return () => {
			audio.current?.removeEventListener("timeupdatef", onDurationChange);
		};
	}, []);

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
					w={{ base: "unset", md: "35%" }}
					maxW={"350px"}
					justifyContent="space-between"
					mx="auto"
					mt="1.5rem"
				>
					<VisuallyHidden>
						<audio ref={audio} controls>
							<source src={song.src} type="audio/mpeg" />
							Your browser does not support the audio element.
						</audio>
					</VisuallyHidden>
					<Box as="button" onClick={prev}>
						<IconPrev width="64px" height="64px" />
					</Box>
					<Box as="button" onClick={togglePlay}>
						<IconPause width="64px" height="64px" />
					</Box>
					<Box as="button" onClick={next}>
						<IconNext width="64px" height="64px" />
					</Box>
				</Flex>
			</Box>
		</Box>
	);
};

export default forwardRef(Player);
