import { Global } from "@emotion/react";

const Fonts = () => {
	return (
		<Global
			styles={`
        @font-face {
          font-family: MC;
          font-style: normal;
          font-weight: 400;
          src: url(fonts/Miraculous&Christmas.ttf) format("truetype");
        }
        @font-face {
          font-family: Salsa;
          font-style: normal;
          font-weight: 400;
          src: url(fonts/Salsa-Regular.ttf) format("truetype");
        }
        @font-face {
          font-family: iCiel;
          font-style: normal;
          font-weight: 400;
          src: url(fonts/iCiel-Astrolight-Roman.ttf);
        }
        @font-face {
          font-family: "iCielKL Soulbeams";
          src: url(fonts/Soulbeams.ttf);
        }
        @font-face {
          font-family: RB;
          src: url(fonts/ReenieBeanie-Regular.ttf);
        }
        @font-face {
          font-family: Dongle;
          src: url(fonts/Dongle-Light.ttf);
          font-weight: 300;
        }
        @font-face {
          font-family: Dongle;
          src: url(fonts/Dongle-Regular.ttf);
          font-weight: 400;
        }
        @font-face {
          font-family: Dongle;
          src: url(fonts/Dongle-Bold.ttf);
          font-weight: 700;
        }
      
      `}
		/>
	);
};

export default Fonts;
