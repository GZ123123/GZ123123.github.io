import { Box } from "@chakra-ui/react";
import { Banner } from "../../../others";

const Header = () => {
	return (
		<header>
			<Box className="title">
				<h1>Merry Christmas</h1>
				<h4>gift love for you</h4>
			</Box>

			<Banner />
		</header>
	);
};

export default Header;
