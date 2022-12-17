import Head from "next/head";

import { Box, ChakraProvider, Container } from "@chakra-ui/react";

import { ReactNode } from "react";
import { Router } from "next/router";

import Header from "./Header";
import Footer from "./Footer";
import { Canvas } from "./Canvas";
import theme from "common/theme";

type AppWithRoute = { children: ReactNode; router: Router };

const Main = ({ children }: AppWithRoute) => {
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<title>Merry Christmas</title>
			</Head>

			<Canvas component={children} />

			<Container
				maxW={"container.lg"}
				pt={{ base: "6rem", md: "10rem", lg: "14rem" }}
			>
				<Header />

				<Box as="main">{children}</Box>

				<Footer />

				<div id="footer_image"></div>
			</Container>
		</ChakraProvider>
	);
};

export default Main;
