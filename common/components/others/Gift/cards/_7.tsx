import { AspectRatio, Box } from "@chakra-ui/react";
import GiftItem from "../Item";

const Card_7 = () => {
	return (
		<AspectRatio ratio={1} w="30%" maxW="250px">
			<GiftItem
				images={[
					require("public/images/gifts/gift_7.webp"),
					require("public/images/gifts/gift_7_mobile.webp"),
				]}
				alt="gift_7"
				top={{ base: "50%", md: "20%" }}
				left={{ base: 0, md: "42%" }}
				width={{ base: "100%", md: "57%" }}
			>
				<Box
					textAlign={{ base: "center", md: "left" }}
					px={{ base: "25px", md: "35px" }}
					fontSize={{ base: "24px", md: "20px" }}
					fontFamily={"dongle"}
					fontWeight={{ base: "400", md: "300" }}
				>
					<Box lineHeight="140%">
						<Box as="span" fontSize={"32px"} fontFamily="iCielKL Soulbeams">
							Matakunkun
						</Box>{" "}
						ơi
					</Box>
					<Box lineHeight={{ base: "120%", md: "120%" }} mt={1}>
						Giáng Sinh đã tràn về với bạn rồi đây!
					</Box>
					<Box
						lineHeight={{ base: "120%", md: "120%" }}
						display={{ base: "block", md: "none" }}
						mt={1}
					>
						Cầu chúc bạn có một mùa Giáng Sinh trọn vẹn và đặc biệt bên cạnh
						những người mình yêu thương!
					</Box>
					<Box
						lineHeight={{ base: "120%", md: "120%" }}
						display={{ base: "none", md: "block" }}
					>
						Nếu rồi, mong rằng thời gian sẽ chậm trôi để cậu cùng người mình
						thương rong đuổi khắp phố phường, để cảm nhận hết được sự ấm áp bình
						dị xung quanh ta.
					</Box>
					<Box
						lineHeight={{ base: "120%", md: "120%" }}
						display={{ base: "none", md: "block" }}
					>
						Nếu chưa, mong rằng trong một khoảnh khắc nào đó, sẽ có người đến và
						cầm lấy tay cậu, mang cho cậu sự ấm áp vào những ngày đông lạnh giá,
						nhé!
					</Box>
					<Box
						lineHeight={{ base: "120%", md: "120%" }}
						display={{ base: "none", md: "block" }}
					>
						Chúc cho dù thế nào đi nữa, mong cậu vẫn luôn an nhiên. Chỉ cần cậu
						mỉm cười, hạnh phúc nhất định sẽ đến với cậu!
					</Box>
				</Box>
			</GiftItem>
		</AspectRatio>
	);
};

export default Card_7;
