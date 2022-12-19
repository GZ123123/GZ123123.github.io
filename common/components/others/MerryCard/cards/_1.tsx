import { AspectRatio, Box, Text } from "@chakra-ui/react";
import { IconSantaClaus } from "public/icons";
import CardItem from "../Item";

import Image from "public/images/question-santa-card.png";

const Card_1 = ({ active }: any) => {
	return (
		<AspectRatio ratio={1} w="30%" maxW="250px">
			<CardItem
				active={active}
				icon={<IconSantaClaus width="100%" height="100%" />}
				title="Ông già Noel"
				image={Image}
			>
				<Box
					fontSize={"24px"}
					textAlign={{ base: "justify", md: "left" }}
					fontFamily="Dongle"
				>
					<Box as="p" display={{ base: "contents", md: "block" }}>
						Theo truyền thuyết ông Già Noel sống tại Bắc Cực. Ống sống với những
						người lùn và dành đa số thời gian để nhận thư từ tất cả trẻ con trên
						thế giới và chuẩn bị quà cho chúng.
					</Box>
					<Box as="p" display={{ base: "contents", md: "block" }}>
						Hình mẫu ông già Noel được xuất phát từ Santa Claus - Thánh Nicholas
						của Myra Lycia.
					</Box>
				</Box>
			</CardItem>
		</AspectRatio>
	);
};

export default Card_1;
