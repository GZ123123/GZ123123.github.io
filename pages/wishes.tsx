import { Box } from "@chakra-ui/react";
import {
	Gift,
	Letter,
	MerryCard,
	MusicPlayer,
} from "../common/components/others";

const Wishes = () => {
	return (
		<>
			{/* <MusicPlayer /> */}

			{/* <Gift /> */}

			{/* <MerryCard /> */}

			<Letter />
		</>
	);
};

export async function getStaticProps() {
	return {
		props: {},
	};
}

export default Wishes;
