import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";

import { Layout } from "../common/components";

import theme from "../common/theme";

const MyApp = ({ Component, pageProps, router }: AppProps) => {
	return (
		<ChakraProvider theme={theme}>
			<Layout router={router}>
				<Component {...pageProps} key={router.route} />
			</Layout>
		</ChakraProvider>
	);
};

export default MyApp;
