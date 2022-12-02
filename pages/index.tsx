import { Box } from "@chakra-ui/react";
import { Gift, MerryCard, MusicPlayer } from "../common/components/others";

const App = () => {
	return (
		<Box>
			<MusicPlayer />

			<Gift />

			<MerryCard />
		</Box>
	);
};

export async function getStaticProps() {
	return {
		props: {},
	};
}

export default App;
