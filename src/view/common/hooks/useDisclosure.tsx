import {useState} from 'react';

type UseDisclosureType = {
	initialState: boolean;
	callbacks?: {onOpen?(): void; onClose?(): void};
};

const useDisclosure = <TData extends object>({
	initialState,
	callbacks,
}: UseDisclosureType) => {
	const [isOpen, setIsOpen] = useState(initialState);
	const [valueState, setValueState] = useState<TData>();

	const open = () => {
		if (!isOpen) {
			setIsOpen(true);
			callbacks?.onOpen?.();
		}
	};

	const close = () => {
		if (isOpen) {
			setIsOpen(false);
			callbacks?.onClose?.();
		}
	};

	const toggle = () => {
		if (isOpen) {
			close();
		} else {
			open();
		}
	};

	return [isOpen, {open, close, toggle}, {valueState, setValueState}] as const;
};

export default useDisclosure;
