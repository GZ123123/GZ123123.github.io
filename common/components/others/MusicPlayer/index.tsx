import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

import musicBackground from "public/images/music-background.webp";
import Player from "./Player";

const MusicPlayer = () => {
	const [song] = useState({
		name: "All I Want For Christmas Is You",
		lyric: "/song/santa-tell-me/lyric.lrc",
	});

	return (
		<Box>
			<Box border={"5px solid white"} borderRadius="12px">
				<Image
					style={{
						height: "350px",
						objectFit: "cover",
						clipPath: "inset(0% 0% 0% 0% round 12px)",
					}}
					src={musicBackground}
					alt="music player background"
				/>
			</Box>

			<Player song={song} />
		</Box>
	);
};

export default MusicPlayer;
