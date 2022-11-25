import { Box, Divider } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
	return (
		<footer>
			<Box as="h4">A little cuteness for Christmas</Box>
			<Divider border="1" />
			<Box className="content">
				<Box className="socials">
					<Link
						rel="noopener noreferrer"
						href="https://fb.com"
						target="_blank"
						aria-label="instagram"
					>
						<i className="icon instagram"></i>
					</Link>
					<Link
						rel="noopener noreferrer"
						href="https://linkedin.com"
						target="_blank"
						aria-label="linkedin"
					>
						<i className="icon linkedin"></i>
					</Link>
					<Link
						rel="noopener noreferrer"
						href="https://fb.com"
						target="_blank"
						aria-label="facebook"
					>
						<i className="icon facebook"></i>
					</Link>
				</Box>
			</Box>
		</footer>
	);
};

export default Footer;
