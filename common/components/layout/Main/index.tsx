import { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

const MainLayout = ({ children }: { children: ReactNode }) => {
	return (
		<Box>
			<Header />
			<main>{children}</main>
			<Footer />
		</Box>
	);
};

export default MainLayout;
