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
import { useCallback, useMemo, useState } from "react";

import ResizeTextarea from "react-textarea-autosize";

import { withSessionSsr } from "common/utilities/session";

import * as icons from "public/icons";

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

const randomIcons = [
	icons.IconSantaClaus,
	icons.IconChristmasStocking,
	icons.IconStar,
	icons.IconChristmasWreath,
	icons.IconChristmasTree,
	icons.IconChristmasBell,
];

const Wishes = ({ user, messages }: IWishProps) => {
	const [sended, setSended] = useState(null);

	const _message = useMemo(() => {
		return sended ? [sended, ...messages] : [...messages];
	}, [sended, messages]);

	const [input, setInput] = useState<string | undefined>("");

	const send = useCallback(() => {
		fetch("/api/form", {
			method: "POST",
			body: JSON.stringify({ message: input }),
		})
			.then((res) => res.json())
			.then((res) => setSended(res));

		setInput("");
	}, [input]);

	return (
		<>
			<Container minH={"50vh"} maxW="container.md" pos="relative">
				<Box
					sx={{ borderRadius: "8px", overflow: "hidden", position: "relative" }}
					mt={{ base: "2rem", md: "3rem" }}
					_before={before}
				>
					<InputGroup size={{ base: "md", md: "lg" }} alignItems={"flex-end"}>
						<Textarea
							disabled={!!sended}
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
							fontSize={{ base: "18px !important", sm: "30px !important" }}
							paddingTop={{ md: "4px" }}
							backgroundColor="transparent"
							display="none"
							transition="all 250ms ease-out"
						/>
					</InputGroup>
				</Box>
				<Box
					pos={"relative"}
					mt={{ base: "6rem", sm: "8rem", md: "14rem" }}
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
							loading="eager"
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
						maxH="90vh"
						overflowY="scroll"
					>
						<Box
							pt="5px"
							sx={{
								minH: "500px",
								background:
									"repeating-linear-gradient(transparent, transparent 39px, white 40px, white 40px)",
							}}
						>
							{_message.map((value, index) => (
								<Box key={index} textAlign={index % 2 ? "right" : "left"}>
									<Box>
										<Text
											fontSize="32px"
											fontFamily="iCielKL Soulbeams"
											display={"flex"}
											justifyContent={index % 2 ? "right" : "left"}
											alignItems="center"
										>
											{(() => {
												const Icon = randomIcons.at(index % 6);

												return (
													!(index % 2) && (
														<Icon
															width="24px"
															height="24px"
															style={{ marginRight: "12px" }}
														/>
													)
												);
											})()}
											{value.name}
											{(() => {
												const Icon = randomIcons.at(index % 6);

												return (
													index % 2 && (
														<Icon
															width="24px"
															height="24px"
															style={{ marginLeft: "12px" }}
														/>
													)
												);
											})()}
										</Text>
										<Text
											as="pre"
											fontFamily="Dongle"
											fontSize="24px"
											marginTop={"12px"}
											lineHeight="40px"
											whiteSpace="pre-wrap"
											wordBreak="break-word"
										>
											{value.message}
										</Text>
										<Box height={"36px"}></Box>
									</Box>
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
							loading="eager"
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
