import { AspectRatio, Box, Text } from "@chakra-ui/react";
import { IconChristmasWreath } from "public/icons";
import CardItem from "../Item";

import Image from "public/images/question-wreath-card.webp";

const Card_4 = () => {
	return (
		<AspectRatio ratio={1} w="30%" maxW="250px">
			<CardItem
				icon={<IconChristmasWreath width="100%" height="100%" />}
				title="Vòng Nguyệt Quế"
				image={Image}
				ltr
			>
				<Box
					fontSize={"24px"}
					textAlign={{ base: "justify", md: "left" }}
					fontFamily="Dongle"
				>
					<Box as="p">
						Vòng nguyệt quế dùng để trang trí báo hiệu giáng sinh đã đến, tượng
						trưng cho một tương lai tươi sáng, một mùa xuân ấm áp giữa cái lạnh
						của mùa đông và còn là biểu tượng của cái vĩnh hằng.
					</Box>
					<Box as="p">
						Vòng tròn của vòng nguyệt quế không có điểm đầu cũng không có điểm
						kết thúc mang ý nghĩa về một cuộc sống viên mãn, hạnh phúc trọn vẹn.
					</Box>
				</Box>
			</CardItem>
		</AspectRatio>
	);
};

export default Card_4;
