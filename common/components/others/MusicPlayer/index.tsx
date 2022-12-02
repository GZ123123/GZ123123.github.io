import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

import musicBackground from "../../../../public/images/music-background.webp";

const MusicPlayer = () => {
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
			<Text>MusicPlayer</Text>
		</Box>
	);
};

export default MusicPlayer;
