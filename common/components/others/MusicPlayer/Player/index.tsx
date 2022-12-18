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
	useCallback,
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

	const [status, setStatus] = useState(0);

	const [process, setProcess] = useState(0);

	const [lyric, setLyric] = useState("Justin Bieber, Mariah Carey");

	const [duration, setDuration] = useState("00:00");

	const play = useCallback(() => {
		setStatus(1);
		audio.current.play();
	}, []);

	const pause = useCallback(() => {
		setStatus(0);
		audio.current.pause();
	}, []);

	const togglePlay = useCallback(() => (!!status ? pause() : play()), [status]);

	const onDurationChange = (e: any) => {
		setProcess(
			Math.min((audio.current.currentTime / audio.current.duration) * 100, 100)
		);
	};

	const prev = () => {};

	const next = () => {};

	const caculateDuration = () => {
		const _duration = audio.current.duration;

		const minus = Math.ceil(_duration / 60);
		const second = Math.ceil(_duration % 60);

		setDuration(
			`${minus < 10 ? `0${minus}` : minus}:${
				second < 10 ? `0${second}` : second
			}`
		);
	};

	useImperativeHandle(ref, () => ({ play, pause }), []);

	useEffect(() => {
		// audio.current?.addEventListener("timeupdate", onDurationChange);

		audio.current?.addEventListener("loadeddata", caculateDuration);

		caculateDuration();

		return () => {
			// audio.current?.removeEventListener("timeupdatef", onDurationChange);
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
				<Flex mt="1.5rem" alignItems={"center"}>
					<Text fontFamily="Dongle" fontSize={{ base: "24px", md: "32px" }}>
						00:00
					</Text>

					<Flex
						w={{ base: "50%", md: "35%" }}
						maxW={"350px"}
						justifyContent="space-between"
						mx="auto"
					>
						<VisuallyHidden>
							<audio
								ref={audio}
								controls
								tabIndex={-1}
								onTimeUpdate={onDurationChange}
							>
								<source src={song.src} type="audio/mpeg" />
								Your browser does not support the audio element.
							</audio>
						</VisuallyHidden>
						<Box
							as="button"
							onClick={prev}
							width={{ base: "32px", md: "64px" }}
							height={{ base: "32px", md: "64px" }}
						>
							<IconPrev style={{ width: "100%", height: "100%" }} />
						</Box>
						<Box
							as="button"
							onClick={togglePlay}
							width={{ base: "32px", md: "64px" }}
							height={{ base: "32px", md: "64px" }}
						>
							{status ? (
								<IconPause style={{ width: "100%", height: "100%" }} />
							) : (
								<IconPlay style={{ width: "100%", height: "100%" }} />
							)}
						</Box>
						<Box
							as="button"
							onClick={next}
							width={{ base: "32px", md: "64px" }}
							height={{ base: "32px", md: "64px" }}
						>
							<IconNext style={{ width: "100%", height: "100%" }} />
						</Box>
					</Flex>
					<Text fontFamily="Dongle" fontSize={{ base: "24px", md: "32px" }}>
						{duration}
					</Text>
				</Flex>
			</Box>
		</Box>
	);
};

export default forwardRef(Player);
