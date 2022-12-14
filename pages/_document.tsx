import { ColorModeScript } from "@chakra-ui/react";

import { Html, Head, Main, NextScript } from "next/document";

import Fonts from "common/fonts";

import theme from "../common/theme";

export default function Document() {
	return (
		<Html lang="en">
			<Head />

			<Fonts />

			<body>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />

				<Main />

				<NextScript />
			</body>
		</Html>
	);
}
