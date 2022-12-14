import { AspectRatio, Box } from "@chakra-ui/react";
import GiftItem from "../Item";

const Card_5 = () => {
	return (
		<AspectRatio ratio={1} w="30%" maxW="250px">
			<GiftItem
				images={[
					require("public/images/gifts/gift_5.webp"),
					require("public/images/gifts/gift_5_mobile.webp"),
				]}
				alt="gift_5"
				top={{ base: "45%", md: "40%" }}
				left={{ base: 0, md: "47%" }}
				width={{ base: "100%", md: "52%" }}
			>
				<Box
					textAlign={{ base: "center", md: "left" }}
					px={"35px"}
					fontSize={{ base: "24px", md: "20px" }}
					fontFamily={"dongle"}
				>
					<Box lineHeight="140%">
						<Box
							as="span"
							fontSize={"32px"}
							fontFamily="iCielKL Soulbeams"
							color="#233239"
						>
							Matakunkun ơi
						</Box>
					</Box>
					<Box lineHeight="120%" color="#233239">
						Chúc bạn một Giáng Sinh an lành nhé Chúc bạn có một cuộc đời luôn an
						nhiên và vô ưu! Chúc cho tâm hồn bạn mãi trong trẻo, giản đơn như
						trẻ thơ, vì cổ tích đời thường là có thật!
					</Box>
				</Box>
			</GiftItem>
		</AspectRatio>
	);
};

export default Card_5;
