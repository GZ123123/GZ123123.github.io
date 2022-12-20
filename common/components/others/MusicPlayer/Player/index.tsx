import {
	Box,
	Center,
	Flex,
	Progress,
	Text,
	VisuallyHidden,
} from "@chakra-ui/react";
import {
	forwardRef,
	useCallback,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from "react";

import { IconNext, IconPause, IconPlay, IconPrev } from "public/icons";

import { IPlayerProps } from "common/interfaces";

interface ILyrical {
	startAt: number;
	endAt: number;
	value: string;
}

class Lyricer {
	private cache: { [key: string]: string } = {};
	private lyric: ILyrical[] = [];

	public async init(src: string) {
		let raw = this.cache[src];

		if (!raw) {
			raw = await fetch(src).then((res) => res.text());
		}

		this.lyric = [];
		let _lyric: { startAt: number; endAt?: number; value: string }[] = [];

		raw.split(/[\r\n]/).forEach((line) => {
			if (/\[([a-z]+):(.*)\].*/.test(line)) return; // tag
			// timeline
			const [, time, lyric] = /(\[[0-9.:\[\]]*\])+(.*)/.exec(line) ?? [];
			time
				?.replace(/\]\[/g, "],[")
				.split(",")
				.forEach((t) => {
					const [, minus, second] = /\[([0-9]+):([0-9.]+)\]/.exec(t) ?? [];
					if (minus && second) {
						_lyric.push({
							startAt: parseInt(minus, 10) * 60 + parseFloat(second),
							value: lyric,
						});
					}
				});
		});

		_lyric.sort((a, b) => a.startAt - b.startAt);

		for (let i = 0; i < _lyric.length; i++)
			this.lyric.push({
				startAt: _lyric[i].startAt,
				value: _lyric[i].value,
				endAt: _lyric[i + 1]?.startAt,
			});

		return this.lyric[0].value;
	}

	public get(current: number): string {
		return (
			this.lyric.find((l) => l.startAt <= current && l.endAt >= current)
				?.value ?? ""
		);
	}
}

const Player = ({ song, onPrev, onNext }: IPlayerProps, ref: any) => {
	const audio = useRef<any>();

	const [lyricer] = useState(new Lyricer());

	const [status, setStatus] = useState(0);

	const [process, setProcess] = useState(0);

	const [lyric, setLyric] = useState("");

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
		setLyric(lyricer.get(audio.current.currentTime));
		setProcess(
			Math.min((audio.current.currentTime / audio.current.duration) * 100, 100)
		);
	};

	const caculateDuration = useCallback(() => {
		const _duration = audio.current.duration;

		const minus = _duration ? Math.ceil(_duration / 60) : 0;
		const second = _duration ? Math.ceil(_duration % 60) : 0;

		setDuration(
			`${minus < 10 ? `0${minus}` : minus}:${
				second < 10 ? `0${second}` : second
			}`
		);
	}, []);

	useImperativeHandle(ref, () => ({ play, pause }), []);

	useEffect(() => {
		audio.current?.addEventListener("loadeddata", caculateDuration);

		caculateDuration();

		return () => {
			audio.current?.removeEventListener("loadeddata", caculateDuration);
		};
	}, []);

	useEffect(() => {
		(async () => setLyric(await lyricer.init(song.lyric)))();
	}, [song]);

	return (
		<Box mt={{ base: "1.5rem" }} textAlign="center">
			<Text as="h4" fontSize={{ base: "2rem", md: "3rem" }}>
				{song.name}
			</Text>
			<Text
				as="p"
				fontFamily={"Dongle"}
				fontSize={{ base: "1.5rem", sm: "1.75rem", md: "2.25rem" }}
				pt={{ base: "0.5rem", md: "1rem" }}
				height={{ base: "3.25rem", sm: "3.5rem", md: "4rem" }}
			>
				{lyric}
			</Text>
			<Box mt={{ base: "0", md: "1rem" }}>
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
							onClick={onPrev}
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
							onClick={onNext}
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
