import { AspectRatio, Box } from "@chakra-ui/react";
import GiftItem from "../Item";

const Card_1 = () => {
	return (
		<AspectRatio ratio={1} w="30%" maxW="250px">
			<GiftItem
				images={[
					require("public/images/gifts/gift_1.webp"),
					require("public/images/gifts/gift_1_mobile.webp"),
				]}
				alt="gift_1"
				top={{ base: "49%", md: "25%" }}
				left={{ base: "0", md: "56%" }}
				width={{ base: "100%", md: "40%" }}
			>
				<Box
					textAlign={{ base: "center", md: "left" }}
					px={{ base: "25px", md: "15px" }}
					fontSize={{ base: "24px", md: "20px" }}
					fontFamily={"dongle"}
				>
					<Box lineHeight="140%" as="span">
						<Box
							as="span"
							fontSize={{ base: "32px", md: "30px" }}
							fontFamily="iCielKL Soulbeams"
						>
							Matakunkun
						</Box>{" "}
						ơi <br />
					</Box>
					<Box
						mt={{ base: 0, md: "8px" }}
						lineHeight={{ base: "140%", md: "120%" }}
						as="p"
					>
						Giáng Sinh đã tràn về với bạn rồi đây!
						<br />
						Cầu chúc bạn có một mùa Giáng Sinh trọn vẹn và đặc biệt bên cạnh
						những người mình yêu thương!
					</Box>
					<Box
						mt={"8px"}
						lineHeight="120%"
						as="p"
						display={{ base: "none", md: "inline-block" }}
					>
						Chúc bạn luôn rạng rỡ và lung linh như những vì sao. Chúc bạn mãi
						luôn giữ được trái tim ấm áp và ngọt ngào đối với mọi người. Chúc
						cho <br />
						sự yêu thương luôn tràn ngập quanh bạn.
					</Box>
					<Box
						mt={"8px"}
						lineHeight="120%"
						as="p"
						display={{ base: "none", md: "inline-block" }}
					>
						Merry Christmas and Happy New Year!
					</Box>
				</Box>
			</GiftItem>
		</AspectRatio>
	);
};

export default Card_1;
