import React from "react";
import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Stack,
	Button,
	useColorModeValue,
	ChakraProvider,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { IUser } from "common/interfaces";
import { withSessionSsr } from "common/utilities/session";
import { useRouter } from "next/router";

const Login = ({}: any) => {
	const router = useRouter();
	const { handleSubmit, register } = useForm();

	const onSubmit = (values: any) => {
		// console.log(values);
		fetch("/api/login", {
			method: "POST",
			body: JSON.stringify(values),
		})
			.then((res) => res.json)
			.then((res) => window.location.reload());
	};

	return (
		<Flex
			minH={"100vh"}
			align={"center"}
			justify={"center"}
			bg={useColorModeValue("gray.50", "gray.800")}
		>
			<Stack spacing={8} mx={"auto"} w="100%" maxW={"lg"} py={12} px={6}>
				<Box
					rounded={"lg"}
					bg={useColorModeValue("white", "gray.700")}
					boxShadow={"lg"}
					p={8}
				>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Stack spacing={4}>
							<FormControl id="email">
								<FormLabel>Username</FormLabel>
								<Input
									type="email"
									{...register("email", {
										required: "Required",
									})}
								/>
							</FormControl>
							<FormControl id="password">
								<FormLabel>Password</FormLabel>
								<Input
									type="password"
									{...register("password", {
										required: "Required",
									})}
								/>
							</FormControl>
							<Stack spacing={10}>
								<Button
									type="submit"
									mt={6}
									bg={"blue.400"}
									color={"white"}
									_hover={{ bg: "blue.500" }}
								>
									Sign in
								</Button>
							</Stack>
						</Stack>
					</form>
				</Box>
			</Stack>
		</Flex>
	);
};

export const getServerSideProps = withSessionSsr(async ({ req, res }: any) => {
	const user: IUser = req.session.user;

	if (user?.isAdmin) {
		return { redirect: { destination: "/admin" } };
	}

	return { props: {} };
});

Login.getLayout = (components: Node) => (
	<ChakraProvider>
		<>{components}</>
	</ChakraProvider>
);

export default Login;
