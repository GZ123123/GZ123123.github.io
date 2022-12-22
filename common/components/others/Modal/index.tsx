import React, { ReactElement, ReactNode, useCallback, useState } from "react";

import { Modal as CModal, ModalOverlay, ModalContent } from "@chakra-ui/react";

interface IModalProps {
	children: ReactNode;
	anchor: ReactElement;
	size: any;
	sx?: any;
	width?: any;
	height?: any;
	borderRadius?: any;
}

const Modal = ({
	children,
	anchor,
	size,
	sx,
	width,
	height,
	borderRadius,
}: IModalProps) => {
	const [isOpen, setOpen] = useState(false);

	const onOpen = useCallback(() => setOpen(true), []);
	const onClose = useCallback(() => setOpen(false), []);

	return (
		<>
			{React.cloneElement(anchor, { onClick: onOpen })}
			<CModal size={size || "md"} isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent
					className="scale-in-center"
					sx={sx}
					width={width}
					height={height}
					borderRadius={borderRadius}
				>
					{children}
				</ModalContent>
			</CModal>
		</>
	);
};

export default Modal;
