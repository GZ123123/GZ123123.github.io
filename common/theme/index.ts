import { defineStyleConfig, extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false
}

const colors = {
  "primary": "#21283A",
  "white": "#fff",
}

const components = {
  Divider: defineStyleConfig({
    baseStyle: {
      borderWidth: '2px',
      borderStyle: "solid",
      backgroundColor: 'white'
    }
  }),
}

const styles = {
  global: (props: any) => ({
    "*": {
      color: mode("primary", "white")(props),
      lineHeight: "100%"
    },
    body: {
      width: "100%",
      minHeight: "100vh",
      bg: mode("white", "primary")(props),
      backgroundImage: `url('/images/header.webp')`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `contain`,
      backgroundPosition: `top`,
      overflowX: 'hidden',
      overflowY: 'overlay'
    },
    "#__next": {
      paddingBottom: "10%",
      backgroundImage: "url('/images/footer.webp')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "bottom"
    },
  })
}

const fonts = {
  body: "Salsa"
}

export default extendTheme({ styles, config, colors, components, fonts })