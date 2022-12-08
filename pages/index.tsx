import { Box } from "@chakra-ui/react";
import Banner from "common/components/others/Banner";
import {
	Gift,
	Letter,
	MerryCard,
	MusicPlayer,
} from "../common/components/others";

const App = () => {
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

export async function getStaticProps() {
	return {
		props: {},
	};
}

export default App;
