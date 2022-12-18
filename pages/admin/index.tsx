import {
	Text,
	Button,
	ButtonGroup,
	Card,
	Flex,
	Table,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
	ChakraProvider,
} from "@chakra-ui/react";
import { IUser } from "common/interfaces";
import { IMessage } from "common/interfaces/message";
import { Database, OBJECT } from "common/utilities/database";
import { withSessionSsr } from "common/utilities/session";
import { useState } from "react";

interface IAdminProp {
	saved: IMessage[];
	sended: IMessage[];
}

const Admin = ({ saved, sended }: IAdminProp) => {
	const [_saved, setSaved] = useState(saved);
	const [_sended, setSended] = useState(sended);

	const onApproved = (index: number) => {
		fetch("/api/form", {
			method: "PUT",
			body: JSON.stringify({ approved: index }),
		})
			.then((res) => res.json())
			.then((res) => {
				const data = _sended.splice(index, 1);
				setSaved([...data, ..._saved]);
			});
	};

	return (
		<>
			<Card
				direction="column"
				w="100%"
				px="0px"
				overflowX={{ sm: "scroll", lg: "hidden" }}
			>
				<Flex px="25px" justify="space-between" mb="20px" align="center">
					<Text fontSize="22px" fontWeight="700" lineHeight="100%">
						Đã gửi
					</Text>
				</Flex>
				<Table variant="simple" mb="24px">
					<Thead>
						<Tr>
							<Th>Người gửi</Th>
							<Th>Nội dung</Th>
							<Th>Actions</Th>
						</Tr>
					</Thead>
					<Tbody>
						{_sended.map(({ name, message }, index) => (
							<Tr key={index}>
								<Td>{name}</Td>
								<Td>
									<pre>{message}</pre>
								</Td>
								<Td>
									<ButtonGroup>
										<Button
											onClick={() => onApproved(index)}
											colorScheme="blue"
										>
											Duyệt
										</Button>
									</ButtonGroup>
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</Card>
			<Card
				direction="column"
				w="100%"
				px="0px"
				overflowX={{ sm: "scroll", lg: "hidden" }}
			>
				<Flex px="25px" justify="space-between" mb="20px" align="center">
					<Text fontSize="22px" fontWeight="700" lineHeight="100%">
						Đang hiển thị
					</Text>
				</Flex>
				<Table variant="simple" mb="24px">
					<Thead>
						<Tr>
							<Th>Người gửi</Th>
							<Th>Nội dung</Th>
						</Tr>
					</Thead>
					<Tbody>
						{_saved.map(({ name, message }, index) => (
							<Tr key={index}>
								<Td>{name}</Td>
								<Td>
									<pre>{message}</pre>
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</Card>
		</>
	);
};

export const getServerSideProps = withSessionSsr(async ({ req, res }: any) => {
	const saved = new Database(OBJECT.SAVED).data || [];
	const sended = new Database(OBJECT.SENDED).data || [];

	const user: IUser = req.session.user;

	if (!user?.isAdmin) {
		return { redirect: { destination: "/admin/login" } };
	}

	return { props: { saved, sended } };
});

Admin.getLayout = (components: Node) => (
	<ChakraProvider>
		<>{components}</>
	</ChakraProvider>
);

export default Admin;
