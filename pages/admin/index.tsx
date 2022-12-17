import { Box } from "@chakra-ui/react";
import { IUser } from "common/interfaces";
import { Database, OBJECT } from "common/utilities/database";
import { withSessionSsr } from "common/utilities/session";

const Admin = ({ saved, sended }: any) => {
	console.log(saved, sended);
	return <Box>asd </Box>;
};

export const getServerSideProps = withSessionSsr(async ({ req, res }: any) => {
	const messages = new Database(OBJECT.SAVED).data;

	const user: IUser = req.session.user;

	if (!user?.isAdmin) {
		return { redirect: { destination: "/admin/login" } };
	}

	return { props: { messages, user } };
});

Admin.getLayout = (components: Node) => components;

export default Admin;
