import { AspectRatio, Box } from "@chakra-ui/react";
import GiftItem from "../Item";

const Card_6 = () => {
	return (
		<AspectRatio ratio={1} w="30%" maxW="250px">
			<GiftItem
				images={[
					require("public/images/gifts/gift_6.png"),
					require("public/images/gifts/gift_6_mobile.png"),
				]}
				alt="gift_6"
				top={{ base: "48%", md: "19%" }}
				left={{ base: 0, md: "45%" }}
				width={{ base: "100%", md: "51%" }}
			>
				<Box
					textAlign={{ base: "center", md: "justify" }}
					px={{ base: "35px", md: "35px" }}
					fontSize={"24px"}
					fontFamily={"dongle"}
				>
					<Box
						display={{ base: "block", md: "block" }}
						lineHeight={"140%"}
						fontSize="32px"
						mb={{ base: "0", md: "17px" }}
						fontFamily={"iCielKL Soulbeams"}
					>
						Christmas is coming!
					</Box>
					<Box
						as="p"
						display={{ base: "contents", md: "block" }}
						lineHeight="110%"
						mt={1}
					>
						Thời khắc đặc biệt trong năm đã đến, còn gì tuyệt vời hơn khi bạn{" "}
						<Box as="br" display={{ base: "block", md: "none" }} />
						có thể tận hưởng trọn vẹn khoảnh khắc này với những người bạn yêu
						thương!{" "}
					</Box>
					<Box as="p" display={{ base: "contents", md: "block" }} mt={1}>
						Tụi mình ước rằng mọi điều tốt lành và may mắn sẽ luôn ở bên bạn
						<Box as="span" display={{ base: "contents", md: "none" }}>
							, bạn nhé!!
						</Box>
						<Box as="span" display={{ base: "none", md: "contents" }}>
							.
						</Box>
					</Box>
					<Box as="p" display={{ base: "none", md: "block" }} mt={1}>
						Chúc cho cuộc sống sắp tới của bạn luôn vui tươi và ấm áp như những
						bản nhạc Noel.
					</Box>
					<Box as="p" display={{ base: "none", md: "block" }} mt={1}>
						Chúc cho bạn luôn tự tin tỏa sáng rực rỡ giữa bầu trời đầy sao, bạn
						nhé!
					</Box>
				</Box>
			</GiftItem>
		</AspectRatio>
	);
};

export default Card_6;
