import Head from "next/head";

import { Box, Container } from "@chakra-ui/react";

import { ReactNode } from "react";
import { Router } from "next/router";

import Header from "./Header";
import Footer from "./Footer";
import { Canvas } from "./Canvas";

type AppWithRoute = { children: ReactNode; router: Router };

const Main = ({ children, router }: AppWithRoute) => {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<title>Merry Christmas</title>
			</Head>

			<Canvas />

			<Container
				maxW={"container.lg"}
				pt={{ base: "6rem", md: "10rem", lg: "14rem" }}
			>
				<Header />

				<Box as="main">{children}</Box>

				<Footer />

				<div id="footer_image"></div>
			</Container>
		</>
	);
};

export default Main;
