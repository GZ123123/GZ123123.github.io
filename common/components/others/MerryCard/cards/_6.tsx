import { AspectRatio, Box, Text } from "@chakra-ui/react";
import { IconChristmasBell } from "public/icons";
import CardItem from "../Item";

import Image from "public/images/question-bell-card.webp";

const Card_6 = () => {
	return (
		<AspectRatio ratio={1} w="30%" maxW="250px">
			<CardItem
				icon={<IconChristmasBell width="100%" height="100%" />}
				title="Tiếng Chuông"
				image={Image}
				ltr
			>
				<Box
					fontSize={"24px"}
					paddingLeft={{ md: "2px" }}
					textAlign={{ base: "justify", md: "left" }}
					fontFamily="Dongle"
				>
					<Box as="p">
						Trong vài nền văn hóa Á Châu, tiếng chuông được dùng báo hiệu cho
						quần chúng biết một biến cố hoan hỉ hay một sự kiện buồn não vừa xảy
						đến.
					</Box>
					<Box as="p">
						Vào lễ Giáng sinh, tại thời khắc 12 giờ đêm 24 tháng 12, những hồi
						chuông ngân vang báo hiệu Chúa hài đồng giáng sinh, báo hiệu tin
						vui, phước lành cho thời khắc đầu tiên của năm mới.
					</Box>
				</Box>
			</CardItem>
		</AspectRatio>
	);
};

export default Card_6;
