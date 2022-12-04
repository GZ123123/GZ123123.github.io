/** @type {import('next').NextConfig} */

module.exports = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		forceSwcTransforms: true,
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: "@svgr/webpack",
					options: { icon: true },
				},
			],
		});

		return config;
	},
};
// nextConfig;
