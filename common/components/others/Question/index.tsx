import { Box, ListItem, UnorderedList } from "@chakra-ui/react";

const Question = () => {
	return (
		<Box className="question">
			<Box as="h3" className="title">
				Christmas symbols mean?
			</Box>
			<Box className="content">
				<UnorderedList>
					<ListItem data-toggle="modal" data-target="question-santa">
						<i className="icon santa"></i>
					</ListItem>
					<ListItem data-toggle="modal" data-target="question-sock">
						<i className="icon stocking"></i>
					</ListItem>
					<ListItem data-toggle="modal" data-target="question-star">
						<i className="icon star"></i>
					</ListItem>
					<ListItem data-toggle="modal" data-target="question-wreath">
						<i className="icon wreath"></i>
					</ListItem>
					<ListItem data-toggle="modal" data-target="question-chirstmas-tree">
						<i className="icon tree"></i>
					</ListItem>
					<ListItem data-toggle="modal" data-target="question-bell">
						<i className="icon bell"></i>
					</ListItem>
				</UnorderedList>
			</Box>
		</Box>
	);
};

export default Question;
