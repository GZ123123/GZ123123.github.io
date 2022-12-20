import { Box } from "@chakra-ui/react";

import Banner from "common/components/others/Banner";
import { withSessionSsr } from "common/utilities/session";

import {
	Gift,
	Letter,
	MerryCard,
	MusicPlayer,
} from "../common/components/others";

const App = ({ user, songs }: any) => {
	return (
		<>
			<Box
				width={"100%"}
				mt={{ base: "2rem" }}
				mb={{ base: "2rem", sm: "3.5rem" }}
			>
				<Banner className={"banner active"} />
			</Box>

			<MusicPlayer songs={songs} />

			<Gift />

			<MerryCard />

			<Letter />
		</>
	);
};

export const getServerSideProps = withSessionSsr(async ({ req, res }: any) => {
	const user = req.session.user ?? {};

	const songs = [
		{
			name: "Santa Tell Me",
			src: "/song/santa-tell-me/song.mp3",
			lyric: "/song/santa-tell-me/lyric.lrc",
		},
		{
			name: "Last Christmas",
			src: "/song/last-chirstmas/song.mp3",
			lyric: "/song/last-chirstmas/lyric.lrc",
		},
	];

	return { props: { user, songs } };
});

export default App;
