import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Modal from "../../others/Modal";

import SantaImage from "public/images/question-santa-card.webp";

const MerryCard = () => {
	return (
		<Box>
			<Modal anchor={<Button>Open Modal</Button>}>
				<Flex
					direction={{ base: "column-reverse", md: "row" }}
					gap={8}
					p="2rem"
				>
					<Box>
						<Text as="h4" textAlign={"center"}>
							Ông già Noel
						</Text>
						<Text as="p" textAlign={"justify"}>
							Theo truyền thuyết ông Già Noel sống tại Bắc Cực. Ống sống với
							những người lùn và dành đa số thời gian để nhận thư từ tất cả trẻ
							con trên thế giới và chuẩn bị quà cho chúng.
						</Text>
						<Text as="p" textAlign={"justify"}>
							Hình mẫu ông già Noel được xuất phát từ Santa Claus - Thánh
							Nicholas của Myra Lycia.
						</Text>
					</Box>
					<Flex justify={"center"}>
						<Image
							style={{
								minWidth: "300px",
							}}
							src={SantaImage}
							alt="santa image"
						/>
					</Flex>
				</Flex>
			</Modal>
		</Box>
	);
};

export default MerryCard;
