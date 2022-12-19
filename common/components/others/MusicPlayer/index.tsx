import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { useMemo, useState } from "react";

import musicBackground from "public/images/music-background.webp";
import Player from "./Player";
import Section from "common/components/layout/Section";
import { ISong } from "common/interfaces";

const MusicPlayer = ({ songs }: { songs: ISong[] }) => {
	const [current, setCurrent] = useState(0);

	const song = useMemo(() => songs?.[current], [current]);

	const onNext = () =>
		setCurrent(current + 1 >= songs.length ? 0 : current + 1);

	const onPrev = () =>
		setCurrent(current - 1 < 0 ? songs.length - 1 : current - 1);

	return (
		<Section pt={{ base: "0", md: "2rem" }}>
			<Box
				border={"5px solid white"}
				borderRadius="12px"
				height={{
					base: "200px",
					sm: "250px",
					md: "400px",
					lg: "500px",
				}}
			>
				<Image
					style={{
						height: "100%",
						objectFit: "cover",
						clipPath: "inset(0% 0% 0% 0% round 12px)",
					}}
					src={musicBackground}
					alt="music player background"
				/>
			</Box>
			{song && (
				<Player key={song.src} song={song} onNext={onNext} onPrev={onPrev} />
			)}
		</Section>
	);
};

export default MusicPlayer;
