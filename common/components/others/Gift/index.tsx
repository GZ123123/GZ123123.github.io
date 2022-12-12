import { AspectRatio, Box, Flex } from "@chakra-ui/react";
import Section from "common/components/layout/Section";
import GiftItem from "./Item";

const Gift = () => {
	return (
		<Section title="Gift love for u">
			<Flex
				gap={{ base: 0, md: "0.5rem" }}
				flexWrap="wrap"
				justifyContent="space-between"
			>
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
								Chúc bạn luôn rạng rỡ và lung linh như những vì sao. Chúc bạn
								mãi luôn giữ được trái tim ấm áp và ngọt ngào đối với mọi người.
								Chúc cho <br />
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
				<AspectRatio ratio={1} w="30%" maxW="250px">
					<GiftItem
						images={[
							require("public/images/gifts/gift_2.webp"),
							require("public/images/gifts/gift_2_mobile.webp"),
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
									Matakunkun
								</Box>{" "}
								ơi
							</Box>
							<Box
								mt={{ base: 0, md: "8px" }}
								lineHeight={{ base: "140%", md: "120%" }}
								as="span"
								color="#003561"
							>
								Noel với bạn có mùi vị như thế nào? Là vị “ngọt ngào”, “ấm áp”
								hay là “yêu thương”?{" "}
								<Box as="br" display={{ base: "none", md: "block" }} />
								Tụi mình ước rằng ba vị trên đều hiện diện với bạn trong mùa
								Giáng Sinh này.{" "}
								<Box
									as="span"
									color="#003561"
									display={{ base: "inline-block", md: "none" }}
								>
									Love uuuuu
								</Box>
							</Box>

							<Box
								mt={{ base: 0, md: "8px" }}
								lineHeight={{ base: "140%", md: "120%" }}
								as="span"
								color="#003561"
								display={{ base: "none", md: "inline-block" }}
							>
								Mong rằng nụ cười của bạn vẫn tươi vui giữa cuộc sống bộn bề
								này. Mong rằng những điều bình dị sẽ mang đến sự ấm áp cho bạn,
								để bạn “can đảm” trao đi yêu thương. Mong rằng có ai đó sẽ luôn
								bên cạnh và trao cho bạn những chiếc ôm ngọt ngào!
							</Box>
							<Box
								mt={{ base: 0, md: "8px" }}
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
				<AspectRatio ratio={1} w="30%" maxW="250px">
					<GiftItem
						images={[
							require("public/images/gifts/gift_3.webp"),
							require("public/images/gifts/gift_3_mobile.webp"),
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
									Matakunkun
								</Box>{" "}
								thân mến
							</Box>
							<Box
								lineHeight={{ base: "140%", md: "120%" }}
								display={{ base: "none", md: "inline-block" }}
							>
								Mùa đẹp nhất trong năm chính là mùa Noel!
							</Box>
							<Box lineHeight={{ base: "140%", md: "120%" }} mt={"1px"}>
								Bạn chờ đợi điều gì nhất ở mùa Giáng Sinh năm nay?
							</Box>
							<Box lineHeight={{ base: "140%", md: "120%" }} mt={"1px"}>
								Tụi mình ước rằng những điều bạn mong chờ đều được “Ông già
								Noel” nghe thấy và trao tặng.
							</Box>
							<Box display={{ base: "none", md: "inline-block" }} mt={"1px"}>
								Chúc cho những đôi tất của bạn tràn ngập quà tặng từ những người
								yêu thương.
							</Box>
							<Box display={{ base: "none", md: "inline-block" }} mt={"1px"}>
								Chúc cho khoảng thời gian ấm áp này sẽ mang bạn và những người
								xung quanh đến gần nhau hơn nữa.{" "}
							</Box>
							<Box display={{ base: "none", md: "inline-block" }} mt={"1px"}>
								Giáng sinh bình an và tốt lành
							</Box>
							<Box display={{ base: "block", md: "none" }}>bạn nhé!</Box>
						</Box>
					</GiftItem>
				</AspectRatio>
				<AspectRatio ratio={1} w="30%" maxW="250px">
					<GiftItem
						images={[
							require("public/images/gifts/gift_4.webp"),
							require("public/images/gifts/gift_4_mobile.webp"),
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
									Matakunkun
								</Box>
							</Box>
							<Box lineHeight={{ base: "140%", md: "110%" }} mt="1px">
								Vậy là một mùa Giáng Sinh nữa lại đến, tụi mình mong bạn có một
								mùa Giáng Sinh an lành và ấm áp.
							</Box>
							<Box lineHeight={{ base: "140%", md: "110%" }} mt="1px">
								Chúc cho những cố gắng và nỗ lực trong năm của bạn đều được đền
								đáp xứng đáng.
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
								Chúc bạn một Giáng Sinh an lành nhé Chúc bạn có một cuộc đời
								luôn an nhiên và vô ưu! Chúc cho tâm hồn bạn mãi trong trẻo,
								giản đơn như trẻ thơ, vì cổ tích đời thường là có thật!
							</Box>
						</Box>
					</GiftItem>
				</AspectRatio>
				<AspectRatio ratio={1} w="30%" maxW="250px">
					<GiftItem
						images={[
							require("public/images/gifts/gift_6.webp"),
							require("public/images/gifts/gift_6_mobile.webp"),
						]}
						alt="gift_6"
						top={{ base: "60%", md: "19%" }}
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
								display={{ base: "none", md: "block" }}
								lineHeight={"140%"}
								fontSize="32px"
								mb="17px"
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
								Thời khắc đặc biệt trong năm đã đến, còn gì tuyệt vời hơn khi
								bạn <Box as="br" display={{ base: "block", md: "none" }} />
								có thể tận hưởng trọn vẹn khoảnh khắc này với những người bạn
								yêu thương!{" "}
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
								Chúc cho cuộc sống sắp tới của bạn luôn vui tươi và ấm áp như
								những bản nhạc Noel.
							</Box>
							<Box as="p" display={{ base: "none", md: "block" }} mt={1}>
								Chúc cho bạn luôn tự tin tỏa sáng rực rỡ giữa bầu trời đầy sao,
								bạn nhé!
							</Box>
						</Box>
					</GiftItem>
				</AspectRatio>
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
								thương rong đuổi khắp phố phường, để cảm nhận hết được sự ấm áp
								bình dị xung quanh ta.
							</Box>
							<Box
								lineHeight={{ base: "120%", md: "120%" }}
								display={{ base: "none", md: "block" }}
							>
								Nếu chưa, mong rằng trong một khoảnh khắc nào đó, sẽ có người
								đến và cầm lấy tay cậu, mang cho cậu sự ấm áp vào những ngày
								đông lạnh giá, nhé!
							</Box>
							<Box
								lineHeight={{ base: "120%", md: "120%" }}
								display={{ base: "none", md: "block" }}
							>
								Chúc cho dù thế nào đi nữa, mong cậu vẫn luôn an nhiên. Chỉ cần
								cậu mỉm cười, hạnh phúc nhất định sẽ đến với cậu!
							</Box>
						</Box>
					</GiftItem>
				</AspectRatio>
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
								Đây là thời khắc chuyển mùa trong năm. Mùa đông lại giá sắp qua
								đi và một mùa xuân ấm áp sắp tràn về!
							</Box>
							<Box lineHeight={{ base: "120%", md: "100%" }}>
								Chúc cho bạn đủ ngọt ngào để ấm áp suốt mùa đông lạnh lẽo.
							</Box>
							<Box lineHeight={{ base: "120%", md: "100%" }}>
								Chúc cho những mối quan hệ bạn{" "}
								<Box as="br" display={{ base: "block", md: "none" }} />
								“để tâm” sẽ tiến triển tươi mới như không khí ngày xuân.
								<Box as="br" display={{ base: "block", md: "none" }} /> Giáng
								Sinh tốt lành, bạn nhé!
							</Box>
						</Box>
					</GiftItem>
				</AspectRatio>

				<AspectRatio ratio={1} w="30%" maxW="250px">
					<GiftItem
						images={[
							require("public/images/gifts/gift_9.webp"),
							require("public/images/gifts/gift_9_mobile.webp"),
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
									Matakunkun thân mến
								</Box>
							</Box>
							<Box lineHeight="120%" mt={1}>
								Những ngày cuối năm chắc hẳn sẽ
								<Box as="br" display={{ base: "block", md: "none" }} /> bận rộn
								và mệt mỏi lắm!{" "}
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
								Chúc bạn dù có bận rộn nhưng mỗi ngày đều cảm thấy vui vẻ và
								nhiệt huyết.
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
								Chúc cho trái tim ngọt ngào của bạn sẽ làm tan chảy sự băng giá
								của mùa đông.
							</Box>
							<Box mt={{ base: "10px", md: "1px" }}>Love uuuuuuuuuuuuuu!</Box>
						</Box>
					</GiftItem>
				</AspectRatio>
			</Flex>
		</Section>
	);
};

export default Gift;
