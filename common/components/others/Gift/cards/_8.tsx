import { AspectRatio, Box } from "@chakra-ui/react";
import GiftItem from "../Item";

const Card_8 = () => {
	return (
		<AspectRatio ratio={1} w="30%" maxW="250px">
			<GiftItem
				images={[
					require("public/images/gifts/gift_8.webp"),
					require("public/images/gifts/gift_8_mobile.webp"),
				]}
				alt="gift_8"
				top={{ base: "28%", md: "22%" }}
				left={{ base: "0", md: "45%" }}
				width={{ base: "100%", md: "50%" }}
			>
				<Box
					textAlign={{ base: "center", md: "left" }}
					px={{ base: "25px", md: "30px" }}
					fontSize={"24px"}
					fontFamily={"dongle"}
				>
					<Box lineHeight="140%">
						<Box as="span" fontSize={"32px"} fontFamily="iCielKL Soulbeams">
							Matakunkun
						</Box>{" "}
						thân mến
					</Box>
					<Box
						lineHeight={{ base: "120%", md: "100%" }}
						display={{ base: "none", md: "block" }}
					>
						Đây là thời khắc chuyển mùa trong năm. Mùa đông lại giá sắp qua đi
						và một mùa xuân ấm áp sắp tràn về!
					</Box>
					<Box lineHeight={{ base: "120%", md: "100%" }}>
						Chúc cho bạn đủ ngọt ngào để ấm áp suốt mùa đông lạnh lẽo.
					</Box>
					<Box lineHeight={{ base: "120%", md: "100%" }}>
						Chúc cho những mối quan hệ bạn{" "}
						<Box as="br" display={{ base: "block", md: "none" }} />
						“để tâm” sẽ tiến triển tươi mới như không khí ngày xuân.
						<Box as="br" display={{ base: "block", md: "none" }} /> Giáng Sinh
						tốt lành, bạn nhé!
					</Box>
				</Box>
			</GiftItem>
		</AspectRatio>
	);
};

export default Card_8;
