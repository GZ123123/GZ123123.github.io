import {
	Box,
	Container,
	InputGroup,
	InputRightAddon,
	Text,
	Textarea,
} from "@chakra-ui/react";
import { Database, OBJECT } from "common/utilities/database";

import Image from "next/image";
import { useCallback, useState } from "react";

import ResizeTextarea from "react-textarea-autosize";

import { withIronSessionSsr } from "iron-session/next";
import { withSessionSsr } from "common/utilities/session";

interface IWishProps {
	user: any;
	messages: { name: string; message: string }[];
}

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

const Wishes = ({ user, messages }: IWishProps) => {
	console.log("user: ", user);
	const [input, setInput] = useState("");
	const send = useCallback(() => {
		// call api
		fetch("/api/form", {
			method: "POST",
			body: JSON.stringify({ message: input }),
		});
		setInput("");
	}, [input]);
	return (
		<>
			<Container minH={"50vh"} maxW="container.md" pos="relative">
				<Box
					sx={{ borderRadius: "8px", overflow: "hidden", position: "relative" }}
					mb="3rem"
					_before={before}
				>
					<InputGroup size={{ base: "sm", md: "lg" }} alignItems={"baseline"}>
						<Textarea
							value={input}
							onChange={({ target }) => setInput(target.value)}
							as={ResizeTextarea}
							minH="unset"
							overflow="hidden"
							w="100%"
							resize="none"
							minRows={1}
							fontSize={{ base: "18px !important", md: "26px !important" }}
							sx={{
								borderRadius: "8px",
								border: "none !important",
								boxShadow: "none !important",
								fontFamily: "Dongle",
								":valid": {
									"+.chakra-input__right-addon": {
										display: "block",
										opacity: 1,
									},
								},
							}}
						/>
						<InputRightAddon
							onClick={send}
							as={"button"}
							children="SEND"
							fontFamily="Dongle"
							fontSize={{ base: "18px !important", md: "30px !important" }}
							paddingTop={{ md: "4px" }}
							backgroundColor="transparent"
							display="none"
							transition="all 250ms ease-out"
						/>
					</InputGroup>
				</Box>
				<Box
					pos={"relative"}
					mt={{ base: "6rem", sm: "10rem" }}
					mb={{ base: "6rem", md: "8rem" }}
				>
					<Box
						pos={"absolute"}
						top={0}
						left={0}
						transform={"translate(0,-65%)"}
						width={"100%"}
					>
						<Image
							style={{ width: "100%" }}
							src={require("public/images/letter-header.png")}
							alt="snow"
						/>
					</Box>
					<Box
						pt={{ base: "3.5rem", md: "4rem" }}
						pb={{ base: "2rem", md: "2.5rem" }}
						px={{ base: "19px", md: "2rem" }}
						borderRadius="6px"
						border="1px solid white"
						width="100%"
						height="100%"
						minHeight="50vh"
					>
						<Box
							sx={{
								minH: "500px",
								marginTop: "4px",
								background:
									"repeating-linear-gradient(transparent, transparent 25px, white 26px, white 27px)",
							}}
						>
							{messages.map((value, index) => (
								<Box key={index} textAlign={index % 2 ? "right" : "left"}>
									<Text fontSize="24px" fontFamily="iCielKL Soulbeams">
										{value.name}
									</Text>
									<Text
										fontFamily="Dongle"
										fontSize="24px"
										marginTop={"5px"}
										lineHeight="27px"
									>
										{value.message}
									</Text>
									<Box height={"25px"}></Box>
								</Box>
							))}
						</Box>
					</Box>
					<Box
						pos={"absolute"}
						bottom={0}
						left={0}
						transform={"translate(0,50%)"}
						width={"100%"}
					>
						<Image
							style={{ width: "100%" }}
							src={require("public/images/letter-footer.png")}
							alt="snow"
						/>
					</Box>
				</Box>
			</Container>
		</>
	);
};

export const getServerSideProps = withSessionSsr(async ({ req, res }: any) => {
	const messages = new Database(OBJECT.SAVED).data;
	const user = req.session.user || {};

	return { props: { messages, user } };
});

export default Wishes;
