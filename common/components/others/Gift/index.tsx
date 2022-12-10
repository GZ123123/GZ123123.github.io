import { AspectRatio, Box, Flex, Text } from "@chakra-ui/react";
import Section from "common/components/layout/Section";
import Image from "next/image";
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
					<GiftItem>
						<Box display={{ base: "none", md: "inline-block" }}>
							<Image
								src={require("public/images/gifts/gift_1.webp")}
								alt="asd"
							/>
						</Box>
						<Box display={{ base: "inline-block", md: "none" }}>
							<Image
								src={require("public/images/gifts/gift_1_mobile.webp")}
								alt="asd"
							/>
						</Box>
					</GiftItem>
				</AspectRatio>
				<AspectRatio ratio={1} w="30%" maxW="250px">
					<GiftItem>
						<Box display={{ base: "none", md: "inline-block" }}>
							<Image
								src={require("public/images/gifts/gift_2.webp")}
								alt="asd"
							/>
						</Box>
						<Box display={{ base: "inline-block", md: "none" }}>
							<Image
								src={require("public/images/gifts/gift_2_mobile.webp")}
								alt="asd"
							/>
						</Box>
					</GiftItem>
				</AspectRatio>
				<AspectRatio ratio={1} w="30%" maxW="250px">
					<GiftItem>
						<Box display={{ base: "none", md: "inline-block" }}>
							<Image
								src={require("public/images/gifts/gift_3.webp")}
								alt="asd"
							/>
						</Box>
						<Box display={{ base: "inline-block", md: "none" }}>
							<Image
								src={require("public/images/gifts/gift_3_mobile.webp")}
								alt="asd"
							/>
						</Box>
					</GiftItem>
				</AspectRatio>
				<AspectRatio ratio={1} w="30%" maxW="250px">
					<GiftItem>
						<Box display={{ base: "none", md: "inline-block" }}>
							<Image
								src={require("public/images/gifts/gift_4.webp")}
								alt="asd"
							/>
						</Box>
						<Box display={{ base: "inline-block", md: "none" }}>
							<Image
								src={require("public/images/gifts/gift_4_mobile.webp")}
								alt="asd"
							/>
						</Box>
					</GiftItem>
				</AspectRatio>
				<AspectRatio ratio={1} w="30%" maxW="250px">
					<GiftItem>
						<Box display={{ base: "none", md: "inline-block" }}>
							<Image
								src={require("public/images/gifts/gift_5.webp")}
								alt="asd"
							/>
						</Box>
						<Box display={{ base: "inline-block", md: "none" }}>
							<Image
								src={require("public/images/gifts/gift_5_mobile.webp")}
								alt="asd"
							/>
						</Box>
					</GiftItem>
				</AspectRatio>
				<AspectRatio ratio={1} w="30%" maxW="250px">
					<GiftItem>
						<Box display={{ base: "none", md: "inline-block" }}>
							<Image
								src={require("public/images/gifts/gift_6.webp")}
								alt="asd"
							/>
						</Box>
						<Box display={{ base: "inline-block", md: "none" }}>
							<Image
								src={require("public/images/gifts/gift_6_mobile.webp")}
								alt="asd"
							/>
						</Box>
					</GiftItem>
				</AspectRatio>
				<AspectRatio ratio={1} w="30%" maxW="250px">
					<GiftItem>
						<Box display={{ base: "none", md: "inline-block" }}>
							<Image
								src={require("public/images/gifts/gift_7.webp")}
								alt="asd"
							/>
						</Box>
						<Box display={{ base: "inline-block", md: "none" }}>
							<Image
								src={require("public/images/gifts/gift_7_mobile.webp")}
								alt="asd"
							/>
						</Box>
					</GiftItem>
				</AspectRatio>
				<AspectRatio ratio={1} w="30%" maxW="250px">
					<GiftItem>
						<Box display={{ base: "none", md: "inline-block" }}>
							<Image
								src={require("public/images/gifts/gift_8.webp")}
								alt="asd"
							/>
						</Box>
						<Box display={{ base: "inline-block", md: "none" }}>
							<Image
								src={require("public/images/gifts/gift_8_mobile.webp")}
								alt="asd"
							/>
						</Box>
					</GiftItem>
				</AspectRatio>
				<AspectRatio ratio={1} w="30%" maxW="250px">
					<GiftItem>
						<Box display={{ base: "none", md: "inline-block" }}>
							<Image
								src={require("public/images/gifts/gift_9.webp")}
								alt="asd"
							/>
						</Box>
						<Box display={{ base: "inline-block", md: "none" }}>
							<Image
								src={require("public/images/gifts/gift_9_mobile.webp")}
								alt="asd"
							/>
						</Box>
					</GiftItem>
				</AspectRatio>
			</Flex>
		</Section>
	);
};

export default Gift;
