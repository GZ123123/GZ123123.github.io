import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { url } from "inspector";

const instanceLightMode =
	({ colorMode }: any) =>
	(light: any = true, dark: any = false) =>
		colorMode === "light" ? light : dark;

const config: ThemeConfig = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

const colors = {
	primary: "#21283A",
	white: "#fff",
};

const styles = {
	global: (props: any) => {
		const mode = instanceLightMode(props);

		return {
			"*": {
				color: mode("primary", "white"),
			},
			"html, body": {
				width: "100%",
				minHeight: "100vh",
				backgroundColor: mode("white", "primary"),
				backgroundImage: `url('/images/header.webp')`,
				backgroundRepeat: `no-repeat`,
				backgroundSize: `contain`,
				backgroundPosition: `top`,
			},
			"#__next": {
				maxWidth: "1400px",
				marginX: "auto",
			},
			h3: {
				fontFamily: "Salsa",
				fontWeight: 400,
				fontSize: "67px",
				lineHeight: "82px",
			},
			h4: {
				fontFamily: "Salsa",
				fontWeight: 400,
				fontSize: "50px",
				lineHeight: "61px",
			},
			p: {
				fontFamily: "Salsa",
				fontWeight: 400,
				fontSize: "32px",
				lineHeight: "42px",
			},
		};
	},
};

export default extendTheme({ config, styles, colors });
