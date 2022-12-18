import { AspectRatio, Box } from "@chakra-ui/react";
import { IconChristmasStocking } from "public/icons";
import CardItem from "../Item";

import Image from "public/images/question-sock-card.png";

const Card_2 = () => {
	return (
		<AspectRatio ratio={1} w="30%" maxW="250px">
			<CardItem
				icon={<IconChristmasStocking width="100%" height="100%" />}
				title="Tất Giáng Sinh"
				image={Image}
			>
				<Box
					fontSize={"24px"}
					textAlign={{ base: "justify", md: "left" }}
					fontFamily="Dongle"
				>
					<Box as="p" display={{ base: "block" }}>
						Truyền thuyết kể rằng treo tất bên cạnh lò sưởi có ống khói vào đêm
						Giáng Sinh thì sẽ có ông già Noel đến thăm và đặt những món quà ta
						mong ước vào.
					</Box>
					<Box as="p" display={{ base: "block" }}>
						Tặng cho nhau những đôi tất vào mùa Giáng sinh sẽ mang lại sự ấm áp
						và những phúc lành.
					</Box>
				</Box>
			</CardItem>
		</AspectRatio>
	);
};

export default Card_2;
