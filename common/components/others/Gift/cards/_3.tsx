import { AspectRatio, Box } from "@chakra-ui/react";
import GiftItem from "../Item";

const Card_3 = ({ user }: any) => {
	return (
		<AspectRatio ratio={1} w="30%" maxW="250px">
			<GiftItem
				images={[
					require("public/images/gifts/gift_3.png"),
					require("public/images/gifts/gift_3_mobile.png"),
				]}
				alt="gift_3"
				top={{ base: "45%", md: "25%" }}
				left={{ base: 0, md: "47%" }}
				width={{ base: "100%", md: "52%" }}
			>
				<Box
					textAlign={{ base: "center", md: "left" }}
					px={"25px"}
					fontSize={"24px"}
					fontFamily={"dongle"}
				>
					<Box lineHeight="140%" display={{ base: "block", md: "none" }}>
						<Box as="span" fontSize={"32px"} fontFamily="iCielKL Soulbeams">
							{user?.name ?? "Matakunkun"}
						</Box>{" "}
						thân mến
					</Box>
					<Box
						lineHeight={{ base: "140%", md: "110%" }}
						display={{ base: "none", md: "inline-block" }}
					>
						Mùa đẹp nhất trong năm chính là mùa Noel!
					</Box>
					<Box lineHeight={{ base: "140%", md: "110%" }} mt={"1px"}>
						Bạn chờ đợi điều gì nhất ở mùa Giáng Sinh năm nay?
					</Box>
					<Box lineHeight={{ base: "140%", md: "110%" }} mt={"1px"}>
						Tụi mình ước rằng những điều bạn mong chờ đều được “Ông già Noel”
						nghe thấy và trao tặng.
					</Box>
					<Box
						lineHeight={{ base: "140%", md: "110%" }}
						display={{ base: "none", md: "inline-block" }}
						mt={"1px"}
					>
						Chúc cho những đôi tất của bạn tràn ngập quà tặng từ những người yêu
						thương.
					</Box>
					<Box
						lineHeight={{ base: "140%", md: "110%" }}
						display={{ base: "none", md: "inline-block" }}
						mt={"1px"}
					>
						Chúc cho khoảng thời gian ấm áp này sẽ mang bạn và những người xung
						quanh đến gần nhau hơn nữa.{" "}
					</Box>
					<Box
						lineHeight={{ base: "140%", md: "110%" }}
						display={{ base: "none", md: "inline-block" }}
						mt={"1px"}
					>
						Giáng sinh bình an và tốt lành
					</Box>
					<Box
						lineHeight={{ base: "140%", md: "110%" }}
						display={{ base: "block", md: "none" }}
					>
						bạn nhé!
					</Box>
				</Box>
			</GiftItem>
		</AspectRatio>
	);
};

export default Card_3;
