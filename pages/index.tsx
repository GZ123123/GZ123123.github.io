import { Box } from "@chakra-ui/react";

import Banner from "common/components/others/Banner";
import InputModal from "common/components/others/inputModal";
import { withSessionSsr } from "common/utilities/session";
import { useState } from "react";

import {
	Gift,
	Letter,
	MerryCard,
	MusicPlayer,
} from "../common/components/others";

const App = ({ user, songs }: any) => {
	const [_user, setUser] = useState(user);

	const onSave = (user: any) => setUser(user);

	return (
		<>
			{!_user?.name && <InputModal onSave={onSave} />}

			<Box
				width={"100%"}
				mt={{ base: "2rem" }}
				mb={{ base: "2rem", sm: "3.5rem" }}
			>
				<Banner active={!!_user?.name} />
			</Box>

			<MusicPlayer songs={songs} />

			<Gift user={user} />

			<MerryCard />

			<Letter />
		</>
	);
};

export const getServerSideProps = withSessionSsr(async ({ req, res }: any) => {
	const user = req.session.user ?? {};

	const path = `${process.cwd()}/sended.json`;

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
		{
			name: "Mistletoe",
			src: "/song/mistletoe/song.mp3",
			lyric: "/song/mistletoe/lyric.lrc",
		},
		{
			name: "Oh My Wish!",
			src: "/song/oh-my-wish/song.mp3",
			lyric: "/song/oh-my-wish/lyric.lrc",
		},
		{
			name: "Santa Can`t You Hear Me",
			src: "/song/santa-cant-you-hear-me/song.mp3",
			lyric: "/song/santa-cant-you-hear-me/lyric.lrc",
		},
	];

	return { props: { user, songs, path } };
});

export default App;
