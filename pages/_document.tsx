import { ColorModeContext, ColorModeScript, DarkMode } from "@chakra-ui/react";
import Fonts from "common/fonts/iindex";

import { Html, Head, Main, NextScript } from "next/document";

import theme from "../common/theme";

export default function Document() {
	return (
		<Html lang="en">
			<Head />

			<body>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<Fonts />
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
