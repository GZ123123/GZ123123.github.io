import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

import musicBackground from "public/images/music-background.webp";
import Player from "./Player";
import Section from "common/components/layout/Section";

const MusicPlayer = () => {
	const [song] = useState({
		name: "All I Want For Christmas Is You",
		src: "/song/santa-tell-me/song.mp3",
		lyric: "/song/santa-tell-me/lyric.lrc",
	});

	return (
		<Section pt="2rem">
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

			<Player song={song} />
		</Section>
	);
};

export default MusicPlayer;
