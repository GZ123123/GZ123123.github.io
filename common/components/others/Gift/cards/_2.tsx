import { AspectRatio, Box } from "@chakra-ui/react";
import GiftItem from "../Item";

const Card_2 = ({ user }: any) => {
	return (
		<AspectRatio ratio={1} w="30%" maxW="250px">
			<GiftItem
				images={[
					require("public/images/gifts/gift_2.png"),
					require("public/images/gifts/gift_2_mobile.png"),
				]}
				alt="gift_2"
				top={{ base: "40%", md: "22%" }}
				left={{ base: 0, md: "51%" }}
				width={{ base: "100%", md: "48%" }}
			>
				<Box
					textAlign={{ base: "center", md: "left" }}
					px={"25px"}
					fontSize={{ base: "24px", md: "20px" }}
					fontFamily={"dongle"}
				>
					<Box lineHeight="140%" color="#003561">
						<Box
							as="span"
							fontSize={{ base: "32px", md: "30px" }}
							fontFamily="iCielKL Soulbeams"
							color="#003561"
						>
							{user?.name ?? "Matakunkun"}
						</Box>{" "}
						ơi
					</Box>
					<Box
						display={{ base: "contents", md: "block" }}
						mt={{ base: 0, md: "8px" }}
						lineHeight={{ base: "140%", md: "120%" }}
						color="#003561"
					>
						Noel với bạn có mùi vị như thế nào? Là vị “ngọt ngào”, “ấm áp” hay
						là “yêu thương”?{" "}
					</Box>
					<Box
						mt={{ base: 0, md: "1px" }}
						display={{ base: "contents", md: "block" }}
						lineHeight={{ base: "140%", md: "120%" }}
						color="#003561"
					>
						Tụi mình ước rằng ba vị trên đều hiện diện với bạn trong mùa Giáng
						Sinh này.{" "}
					</Box>

					<Box color="#003561" display={{ base: "contents", md: "none" }}>
						Love uuuuu
					</Box>

					<Box
						mt={{ base: 0, md: "1px" }}
						lineHeight={{ base: "140%", md: "120%" }}
						as="span"
						color="#003561"
						display={{ base: "none", md: "inline-block" }}
					>
						Mong rằng nụ cười của bạn vẫn tươi vui giữa cuộc sống bộn bề này.
						Mong rằng những điều bình dị sẽ mang đến sự ấm áp cho bạn, để bạn
						“can đảm” trao đi yêu thương. Mong rằng có ai đó sẽ luôn bên cạnh và
						trao cho bạn những chiếc ôm ngọt ngào!
					</Box>
					<Box
						mt={{ base: 0, md: "1px" }}
						lineHeight={{ base: "140%", md: "120%" }}
						as="span"
						color="#003561"
						display={{ base: "none", md: "inline-block" }}
					>
						Một mùa Giáng Sinh an lành bạn nhé!
					</Box>
				</Box>
			</GiftItem>
		</AspectRatio>
	);
};

export default Card_2;
