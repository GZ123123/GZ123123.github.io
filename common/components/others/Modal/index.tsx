import React, { ReactElement, ReactNode, useCallback, useState } from "react";

import { Modal as CModal, ModalOverlay, ModalContent } from "@chakra-ui/react";

interface IModalProps {
	children: ReactNode;
	anchor: ReactElement;
	size: any;
}

const Modal = ({ children, anchor, size }: IModalProps) => {
	const [isOpen, setOpen] = useState(false);

	const onOpen = useCallback(() => setOpen(true), []);
	const onClose = useCallback(() => setOpen(false), []);

	return (
		<>
			{React.cloneElement(anchor, { onClick: onOpen })}
			<CModal size={size || "md"} isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent>{children}</ModalContent>
			</CModal>
		</>
	);
};

export default Modal;
