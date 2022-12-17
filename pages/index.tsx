import { Box } from "@chakra-ui/react";

import Banner from "common/components/others/Banner";
import { withSessionSsr } from "common/utilities/session";

import {
	Gift,
	Letter,
	MerryCard,
	MusicPlayer,
} from "../common/components/others";

const App = ({ user }: any) => {
	return (
		<>
			<Box width={"100%"} mb={{ base: "3rem", sm: "5.5rem" }}>
				<Banner className={"banner active"} />
			</Box>

			<MusicPlayer />

			<Gift />

			<MerryCard />

			<Letter />
		</>
	);
};

export const getServerSideProps = withSessionSsr(async ({ req, res }: any) => {
	const user = req.session.user ?? {};

	return { props: { user } };
});

export default App;
