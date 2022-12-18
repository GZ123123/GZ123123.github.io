import { AspectRatio, Box } from "@chakra-ui/react";
import { IconStar } from "public/icons";
import CardItem from "../Item";

import Image from "public/images/question-star-card.png";

const Card_3 = () => {
	return (
		<AspectRatio ratio={1} w="30%" maxW="250px">
			<CardItem
				icon={<IconStar width="100%" height="100%" />}
				title="Ngôi Sao"
				image={Image}
			>
				<Box
					fontSize={"24px"}
					textAlign={{ base: "justify", md: "left" }}
					fontFamily="Dongle"
				>
					<Box as="p">
						Ngôi sao Giáng sinh là biểu tượng ý nghĩa trong mùa Giáng Sinh và
						luôn được treo chỗ trang trọng nhất ở các giáo đường, trên các cây
						thông Noel.
					</Box>
					<Box as="p">
						Hình ảnh ngôi sao chính là sức mạnh quyền năng của Chúa, xóa tan
						bóng tối đêm đông lạnh giá, thắp lên một mùa xuân mới ấm áp và hạnh
						phúc cho muôn dân.
					</Box>
				</Box>
			</CardItem>
		</AspectRatio>
	);
};

export default Card_3;
