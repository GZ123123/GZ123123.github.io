import { AspectRatio, Flex, Text } from "@chakra-ui/react";

import SantaImage from "public/images/question-santa-card.webp";
import Section from "common/components/layout/Section";
import CardItem from "./Item";
import {
	IconChristmasBell,
	IconChristmasDecorations,
	IconChristmasStocking,
	IconChristmasWreath,
	IconSantaClaus,
	IconStar,
} from "public/icons";

const MerryCard = () => {
	return (
		<Section title="Christmas symbols mean?">
			<Flex
				gap={{ base: 0, md: "5rem" }}
				flexWrap="wrap"
				justifyContent="space-between"
			>
				<AspectRatio ratio={1} w="30%" maxW="250px">
					<CardItem
						icon={<IconSantaClaus width="100%" height="100%" />}
						title="Ông già Noel"
						image={SantaImage}
					>
						<Text as="p" textAlign={"justify"}>
							Theo truyền thuyết ông Già Noel sống tại Bắc Cực. Ống sống với
							những người lùn và dành đa số thời gian để nhận thư từ tất cả trẻ
							con trên thế giới và chuẩn bị quà cho chúng.
						</Text>
						<Text as="p" textAlign={"justify"}>
							Hình mẫu ông già Noel được xuất phát từ Santa Claus - Thánh
							Nicholas của Myra Lycia.
						</Text>
					</CardItem>
				</AspectRatio>
				<AspectRatio ratio={1} w="30%" maxW="250px">
					<CardItem
						icon={<IconChristmasStocking width="100%" height="100%" />}
						title="Ông già Noel"
						image={SantaImage}
					>
						<Text as="p" textAlign={"justify"}>
							Theo truyền thuyết ông Già Noel sống tại Bắc Cực. Ống sống với
							những người lùn và dành đa số thời gian để nhận thư từ tất cả trẻ
							con trên thế giới và chuẩn bị quà cho chúng.
						</Text>
						<Text as="p" textAlign={"justify"}>
							Hình mẫu ông già Noel được xuất phát từ Santa Claus - Thánh
							Nicholas của Myra Lycia.
						</Text>
					</CardItem>
				</AspectRatio>
				<AspectRatio ratio={1} w="30%" maxW="250px">
					<CardItem
						icon={<IconStar width="100%" height="100%" />}
						title="Ông già Noel"
						image={SantaImage}
					>
						<Text as="p" textAlign={"justify"}>
							Theo truyền thuyết ông Già Noel sống tại Bắc Cực. Ống sống với
							những người lùn và dành đa số thời gian để nhận thư từ tất cả trẻ
							con trên thế giới và chuẩn bị quà cho chúng.
						</Text>
						<Text as="p" textAlign={"justify"}>
							Hình mẫu ông già Noel được xuất phát từ Santa Claus - Thánh
							Nicholas của Myra Lycia.
						</Text>
					</CardItem>
				</AspectRatio>
				<AspectRatio ratio={1} w="30%" maxW="250px">
					<CardItem
						icon={<IconChristmasWreath width="100%" height="100%" />}
						title="Ông già Noel"
						image={SantaImage}
					>
						<Text as="p" textAlign={"justify"}>
							Theo truyền thuyết ông Già Noel sống tại Bắc Cực. Ống sống với
							những người lùn và dành đa số thời gian để nhận thư từ tất cả trẻ
							con trên thế giới và chuẩn bị quà cho chúng.
						</Text>
						<Text as="p" textAlign={"justify"}>
							Hình mẫu ông già Noel được xuất phát từ Santa Claus - Thánh
							Nicholas của Myra Lycia.
						</Text>
					</CardItem>
				</AspectRatio>
				<AspectRatio ratio={1} w="30%" maxW="250px">
					<CardItem
						icon={<IconChristmasDecorations width="100%" height="100%" />}
						title="Ông già Noel"
						image={SantaImage}
					>
						<Text as="p" textAlign={"justify"}>
							Theo truyền thuyết ông Già Noel sống tại Bắc Cực. Ống sống với
							những người lùn và dành đa số thời gian để nhận thư từ tất cả trẻ
							con trên thế giới và chuẩn bị quà cho chúng.
						</Text>
						<Text as="p" textAlign={"justify"}>
							Hình mẫu ông già Noel được xuất phát từ Santa Claus - Thánh
							Nicholas của Myra Lycia.
						</Text>
					</CardItem>
				</AspectRatio>
				<AspectRatio ratio={1} w="30%" maxW="250px">
					<CardItem
						icon={<IconChristmasBell width="100%" height="100%" />}
						title="Ông già Noel"
						image={SantaImage}
					>
						<Text as="p" textAlign={"justify"}>
							Theo truyền thuyết ông Già Noel sống tại Bắc Cực. Ống sống với
							những người lùn và dành đa số thời gian để nhận thư từ tất cả trẻ
							con trên thế giới và chuẩn bị quà cho chúng.
						</Text>
						<Text as="p" textAlign={"justify"}>
							Hình mẫu ông già Noel được xuất phát từ Santa Claus - Thánh
							Nicholas của Myra Lycia.
						</Text>
					</CardItem>
				</AspectRatio>
			</Flex>
		</Section>
	);
};

export default MerryCard;
