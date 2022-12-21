import {
	Box,
	Button,
	Input,
	InputGroup,
	Modal,
	ModalContent,
	ModalOverlay,
	Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { IconSend } from "public/icons";
import { useForm } from "react-hook-form";

const ImputModal = ({ onSave }: any) => {
	const { handleSubmit, register } = useForm();
	const submit = handleSubmit((value: any) => {
		fetch("/api/login", {
			method: "PUT",
			body: JSON.stringify(value),
		})
			.then((res) => res.json())
			.then((res) => onSave(res));
	});

	const onKeyDown = (e: any) => {
		if (e.code === "Enter") submit();
	};

	return (
		<Modal
			size={{ base: "xs", sm: "md" }}
			isOpen={true}
			onClose={() => {}}
			isCentered
		>
			<ModalOverlay bgColor={"rgba(0, 0, 0, 0.7)"} />
			<ModalContent bgColor={"transparent"} pos="relative" boxShadow={"unset"}>
				<Box display={{ base: "block", sm: "none" }} paddingRight={"25px"}>
					<Image
						src={require("public/images/ask-name.png")}
						alt="Ask Name"
						loading="eager"
					/>
				</Box>
				<Box display={{ base: "none", sm: "block" }}>
					<Image
						src={require("public/images/ask-name-desktop.png")}
						alt="Ask Name"
						loading="eager"
					/>
				</Box>
				<Box
					pos={"absolute"}
					top={{ base: "5%", sm: "10%" }}
					left={{ base: "15%", sm: "18%" }}
					width={{ base: "170px", sm: "210px" }}
					height={{ base: "160px", sm: "180px" }}
					borderRadius={"55% 45% 45% 44% / 58% 38% 49% 48%"}
					p={{ base: "32px 16px 16px 12px", md: "32px 16px 16px 12px" }}
				>
					<Text
						color={"primary"}
						fontFamily="Dongle"
						textAlign="center"
						fontSize={{ base: "20px", sm: "24px" }}
					>
						Hi! <br /> Tụi mình có thể <br />
						gọi bạn là
					</Text>
					<Box
						pt={{ base: "0.25rem", sm: "0.25rem" }}
						px={{ base: "0.5rem", sm: "1.5rem" }}
						display="flex"
						alignItems={"center"}
					>
						<InputGroup size="xs">
							<Input
								fontSize={{ base: "20px", sm: "24px" }}
								lineHeight="0"
								fontFamily={"Dongle"}
								variant="flushed"
								placeholder="Your`s Name"
								color={"primary"}
								borderBottom={"1px dashed"}
								borderColor={"primary"}
								textAlign={"center"}
								_placeholder={{ color: "gray.500" }}
								{...register("name", { required: true })}
								onKeyDown={onKeyDown}
							/>
						</InputGroup>
						<Button
							sx={{ aspectRatio: "1" }}
							color={"primary"}
							size="xs"
							ml="4px"
							px={0}
							onClick={submit}
						>
							<IconSend style={{ width: "100%", height: "100%" }} />
						</Button>
					</Box>
				</Box>
			</ModalContent>
		</Modal>
	);
};

export default ImputModal;
