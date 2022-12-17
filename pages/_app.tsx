import "../common/theme/index.css";

import { Layout } from "../common/components";

import { AppPropsWithLayout } from "../common/interfaces";

import { ReactNode } from "react";

const MyApp = ({ Component, pageProps, router }: AppPropsWithLayout) => {
	const layout = Component.getLayout
		? Component.getLayout
		: (component: ReactNode) => <Layout router={router}>{component}</Layout>;

	return layout(<Component {...pageProps} key={router.route} />);
};

export default MyApp;
