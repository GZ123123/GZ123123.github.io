import { AspectRatio, Box } from "@chakra-ui/react";
import GiftItem from "../Item";

const Card_5 = () => {
	return (
		<AspectRatio ratio={1} w="30%" maxW="250px">
			<GiftItem
				images={[
					require("public/images/gifts/gift_5.png"),
					require("public/images/gifts/gift_5_mobile.png"),
				]}
				alt="gift_5"
				top={{ base: "55%", md: "40%" }}
				left={{ base: 0, md: "47%" }}
				width={{ base: "100%", md: "52%" }}
			>
				<Box
					textAlign={{ base: "center", md: "left" }}
					px={"35px"}
					fontSize={{ base: "24px", md: "20px" }}
					fontFamily={"dongle"}
				>
					<Box lineHeight="140%" color="#233239">
						<Box
							as="span"
							fontSize={"32px"}
							color="#233239"
							fontFamily="iCielKL Soulbeams"
						>
							Matakunkun
						</Box>
						&nbsp; ơi
					</Box>
					<Box
						lineHeight="120%"
						color="#233239"
						display={{ base: "block", md: "none" }}
					>
						Chúc bạn một Giáng Sinh an lành nhé Chúc bạn có một cuộc đời luôn an
						nhiên và vô ưu! Chúc cho tâm hồn bạn mãi trong trẻo, giản đơn như
						trẻ thơ, vì cổ tích đời thường là có thật!
					</Box>
					<Box
						lineHeight="120%"
						color="#233239"
						display={{ base: "none", md: "block" }}
					>
						Chúc bạn một Giáng Sinh an lành nhé!
					</Box>

					<Box
						lineHeight="120%"
						color="#233239"
						display={{ base: "none", md: "block" }}
					>
						Chúc bạn có một cuộc đời luôn an nhiên và vô ưu!
					</Box>
					<Box
						lineHeight="120%"
						color="#233239"
						display={{ base: "none", md: "block" }}
					>
						Chúc cho tâm hồn bạn mãi trong trẻo, giản đơn như trẻ thơ, vì cổ
						tích đời thường là có thật!
					</Box>
					<Box
						lineHeight="120%"
						color="#233239"
						display={{ base: "none", md: "block" }}
					>
						Chúc cho bạn có một Santa Claus của riêng bạn, để bạn có thể hồn
						nhiên mà yêu đời.
					</Box>
					<Box
						lineHeight="120%"
						color="#233239"
						display={{ base: "none", md: "block" }}
					>
						Hãy luôn yêu thương bản thân và trân trọng mọi thứ, bạn nhé!
					</Box>
				</Box>
			</GiftItem>
		</AspectRatio>
	);
};

export default Card_5;
