import { AspectRatio, Box } from "@chakra-ui/react";
import GiftItem from "../Item";

const Card_4 = ({ user }: any) => {
	return (
		<AspectRatio ratio={1} w="30%" maxW="250px">
			<GiftItem
				images={[
					require("public/images/gifts/gift_4.png"),
					require("public/images/gifts/gift_4_mobile.png"),
				]}
				alt="gift_4"
				top={{ base: "32%", md: "20%" }}
				left={{ base: 0, md: "37%" }}
				width={{ base: "100%", md: "57%" }}
			>
				<Box
					textAlign={{ base: "center", md: "left" }}
					px={"25px"}
					fontSize={{ base: "24px", md: "26px" }}
					fontFamily={"dongle"}
				>
					<Box lineHeight={{ base: "140%", md: "110%" }}>
						Dear,{" "}
						<Box as="span" fontSize={"32px"} fontFamily="iCielKL Soulbeams">
							{user?.name ?? "Matakunkun"}
						</Box>
					</Box>
					<Box lineHeight={{ base: "140%", md: "110%" }} mt="1px">
						Vậy là một mùa Giáng Sinh nữa lại đến, tụi mình mong bạn có một mùa
						Giáng Sinh an lành và ấm áp.
					</Box>
					<Box lineHeight={{ base: "140%", md: "110%" }} mt="1px">
						Chúc cho những cố gắng và nỗ lực trong năm của bạn đều được
						<Box as="br" display={{ base: "block", md: "none" }} />
						đền đáp xứng đáng.
					</Box>
					<Box
						display={{ base: "none", md: "inline-block" }}
						lineHeight={{ base: "140%", md: "110%" }}
						mt="1px"
					>
						{" "}
						Chúc cho nụ cười của bạn luôn rực rỡ như những ánh đèn.
					</Box>
					<Box
						display={{ base: "none", md: "inline-block" }}
						lineHeight={{ base: "140%", md: "110%" }}
						mt="1px"
					>
						Mong những lời chúc này sẽ mang đến cho bạn niềm vui nhe!
					</Box>
				</Box>
			</GiftItem>
		</AspectRatio>
	);
};

export default Card_4;
