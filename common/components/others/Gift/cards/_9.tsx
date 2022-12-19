import { AspectRatio, Box } from "@chakra-ui/react";
import GiftItem from "../Item";

const Card_9 = () => {
	return (
		<AspectRatio ratio={1} w="30%" maxW="250px">
			<GiftItem
				images={[
					require("public/images/gifts/gift_9.png"),
					require("public/images/gifts/gift_9_mobile.png"),
				]}
				alt="gift_9"
				top={{ base: "39%", md: "40%" }}
				width={{ base: "100%" }}
			>
				<Box
					textAlign="center"
					px={{ base: "35px", md: "85px" }}
					fontSize={"24px"}
					fontFamily={"dongle"}
				>
					<Box lineHeight="140%">
						<Box as="span" fontSize={"32px"} fontFamily="iCielKL Soulbeams">
							Matakunkun
						</Box>
						&nbsp; thân mến
					</Box>
					<Box lineHeight="120%" mt={1}>
						Những ngày cuối năm chắc hẳn sẽ
						<Box as="br" display={{ base: "block", md: "none" }} /> bận rộn và
						mệt mỏi lắm!{" "}
					</Box>
					<Box
						lineHeight="120%"
						display={{ base: "contents", md: "block" }}
						mt={{ base: "10px", md: "1px" }}
					>
						Tụi mình ở đây để tiếp thêm sức mạnh cho bạn.
					</Box>
					<Box
						lineHeight="120%"
						display={{ base: "contents", md: "block" }}
						mt={{ base: "10px", md: "1px" }}
					>
						Chúc bạn dù có bận rộn nhưng mỗi ngày đều cảm thấy vui vẻ và nhiệt
						huyết.
					</Box>
					<Box
						lineHeight="120%"
						display={{ base: "none", md: "block" }}
						mt={{ base: "10px", md: "1px" }}
					>
						Chúc cho đôi mắt của bạn luôn lấp lánh như những vì sao.
					</Box>
					<Box
						lineHeight="120%"
						display={{ base: "none", md: "block" }}
						mt={{ base: "10px", md: "1px" }}
					>
						Chúc cho trái tim ngọt ngào của bạn sẽ làm tan chảy sự băng giá của
						mùa đông.
					</Box>
					<Box mt={{ base: "10px", md: "1px" }}>Love uuuuuuuuuuuuuu!</Box>
				</Box>
			</GiftItem>
		</AspectRatio>
	);
};

export default Card_9;
