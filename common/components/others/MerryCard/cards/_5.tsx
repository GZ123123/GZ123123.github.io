import { AspectRatio, Box } from "@chakra-ui/react";
import { IconChristmasTree } from "public/icons";
import CardItem from "../Item";

import Image from "public/images/question-tree-card.png";

const Card_5 = ({ active }: any) => {
	return (
		<AspectRatio ratio={1} w="30%" maxW="250px">
			<CardItem
				active={active}
				icon={<IconChristmasTree width="100%" height="100%" />}
				title="Cây Thông Noel"
				image={Image}
				ltr
			>
				<Box
					fontSize={"24px"}
					textAlign={{ base: "justify", md: "left" }}
					fontFamily="Dongle"
				>
					<Box as="p">
						Loại cây xanh tốt quanh năm tượng trưng cho sự sống vĩnh cửu, phồn
						vinh và ấm no. Cây thông được chọn cho dịp Giáng sinh cũng là vì nó
						vẫn có thể xanh tốt vào mùa đông lạnh giá. Dù bị tuyết phủ ngập, lá
						thông cũng không bị rụng, cành cây cũng không hề gãy.
					</Box>
					<Box as="p">
						Thánh Boniface nói rằng cây thông là sự sống và nó tượng trưng cho
						cuộc sống vĩnh hằng của Chúa cứu thế.
					</Box>
				</Box>
			</CardItem>
		</AspectRatio>
	);
};

export default Card_5;
