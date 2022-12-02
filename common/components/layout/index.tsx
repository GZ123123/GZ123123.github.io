import Head from "next/head";

import { Box, Container } from "@chakra-ui/react";

import { ReactNode } from "react";
import { Router } from "next/router";

import Header from "./Header";
import Footer from "./Footer";

type AppWithRoute = { children: ReactNode; router: Router };

const Main = ({ children, router }: AppWithRoute) => {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<title>Merry Christmas</title>
			</Head>

			<Container
				maxW={"container.lg"}
				mt={{ base: "6rem", sm: "6rem", lg: "8rem" }}
			>
				<Header />

				<Box as="main">{children}</Box>

				<Footer />
			</Container>
		</>
	);
};

export default Main;
