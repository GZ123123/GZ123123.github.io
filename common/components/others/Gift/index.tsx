import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import { BackIcon } from "../../../../public/icons";

const Gift = () => {
	return (
		<Box className="gift">
			<Box as="h3" className="title">
				Gift for you
			</Box>
			<Box className="content">
				<UnorderedList>
					<ListItem>
						<Box>
							<BackIcon />
							<i className="icon gift"></i>
						</Box>
					</ListItem>
					<ListItem>
						<Box>
							<i className="icon gift"></i>
						</Box>
					</ListItem>
					<ListItem>
						<Box>
							<i className="icon gift"></i>
						</Box>
					</ListItem>
					<ListItem>
						<Box>
							<i className="icon gift"></i>
						</Box>
					</ListItem>
					<ListItem>
						<Box>
							<i className="icon gift"></i>
						</Box>
					</ListItem>
					<ListItem>
						<Box>
							<i className="icon gift"></i>
						</Box>
					</ListItem>
					<ListItem>
						<Box>
							<i className="icon gift"></i>
						</Box>
					</ListItem>
					<ListItem>
						<Box>
							<i className="icon gift"></i>
						</Box>
					</ListItem>
					<ListItem>
						<Box>
							<i className="icon gift"></i>
						</Box>
					</ListItem>
				</UnorderedList>
			</Box>
		</Box>
	);
};

export default Gift;
