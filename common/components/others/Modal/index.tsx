import React, { ReactElement, ReactNode, useCallback, useState } from "react";

import { Modal as CModal, ModalOverlay, ModalContent } from "@chakra-ui/react";

interface IModalProps {
	children: ReactNode;
	anchor: ReactElement;
}

const Modal = ({ children, anchor }: IModalProps) => {
	const [isOpen, setOpen] = useState(false);

	const onOpen = useCallback(() => setOpen(true), []);
	const onClose = useCallback(() => setOpen(false), []);

	return (
		<>
			{React.cloneElement(anchor, { onClick: onOpen })}
			<CModal size={"2xl"} isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent>{children}</ModalContent>
			</CModal>
		</>
	);
};

export default Modal;
