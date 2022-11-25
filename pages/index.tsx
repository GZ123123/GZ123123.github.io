import Head from "next/head";
import { ReactNode } from "react";

import { BASE_URL } from "../common/constants";
import { MainLayout } from "../common/components/layout";

import MusicPlayer from "../common/components/others/MusicPlayer";
import Gift from "../common/components/others/Gift";
import Question from "../common/components/others/Question";

export default function Home() {
	return (
		<>
			<Head>
				<meta name="url" content={BASE_URL} />
			</Head>

			<MusicPlayer />
			<Question />
			<Gift />
		</>
	);
}

Home.getLayout = (page: ReactNode) => <MainLayout>{page}</MainLayout>;

export async function getStaticProps() {
	return {
		props: {},
	};
}
