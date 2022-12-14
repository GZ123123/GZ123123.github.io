import {
	Box,
	Container,
	Input,
	InputGroup,
	InputRightAddon,
} from "@chakra-ui/react";

import Santa from "common/components/others/Dialog/santa.svg";
import SnowLeft from "common/components/others/Dialog/snow-left.svg";
import SnowRight from "common/components/others/Dialog/snow-right.svg";

const before = {
	content: "''",
	position: "absolute",
	borderRadius: "11px",
	border: "5px dashed #fff",
	top: "-3px",
	bottom: "-3px",
	left: "-3px",
	right: "-3px",
};

const Wishes = () => {
	return (
		<>
			<Box
				sx={{ borderRadius: "8px", overflow: "hidden", position: "relative" }}
				mb="3rem"
				_before={before}
			>
				<InputGroup size="lg">
					<Input
						required
						placeholder="Viết ở đây nè..."
						_placeholder={{
							color: "white",
						}}
						sx={{
							borderRadius: "8px",
							border: "none !important",
							boxShadow: "none !important",
							fontFamily: "Dongle",
							fontSize: "26px",
							":valid": {
								"+.chakra-input__right-addon": {
									display: "block",
									opacity: 1,
								},
							},
						}}
					/>
					<InputRightAddon
						as={"button"}
						children="SEND"
						fontFamily="Dongle"
						fontSize="30px"
						paddingTop="4px"
						backgroundColor="transparent"
						opacity={"0"}
						display="none"
						transition="all 250ms ease-out"
					/>
				</InputGroup>
			</Box>
			<Container minH={"50vh"} maxW="container.sm" pos="relative">
				<Santa
					style={{
						position: "absolute",
						top: "-25px",
						left: "50%",
						transform: "translate(-50%,-50%)",
						height: "auto",
					}}
					width="250px"
					height="auto"
				/>
				<SnowLeft
					style={{
						position: "absolute",
						top: "-25px",
						left: "0%",
						height: "45px",
					}}
					width="350px"
					height="auto"
				/>
				<SnowRight
					style={{
						position: "absolute",
						top: "-25px",
						left: "55%",
						height: "auto",
					}}
					width="250px"
					height="auto"
				/>
				<Box
					borderRadius="6px"
					border="1px solid white"
					width="100%"
					height="100%"
					minHeight="50vh"
				></Box>
			</Container>
		</>
	);
};

export async function getStaticProps() {
	return {
		props: {},
	};
}

export default Wishes;
