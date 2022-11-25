import { Head, Html, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

import { ChakraProvider } from "@chakra-ui/react";

import theme from "../common/theme/global";

const MainDocument = () => {
	return (
		<Html lang="en">
			<Head />
			<body>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<ChakraProvider theme={theme}>
					<Main />
				</ChakraProvider>
				<NextScript />
			</body>
		</Html>
	);
};

export default MainDocument;
