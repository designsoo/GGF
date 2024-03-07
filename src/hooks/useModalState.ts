import { useState } from 'react';

type ModalIdentifiers = string[];
type ModalVisibilityState = Record<string, boolean>;

const useModalState = (modalIdentifiers: ModalIdentifiers) => {
  const initialModalState: ModalVisibilityState = modalIdentifiers.reduce((acc, modalKey) => {
    acc[modalKey] = false;
    return acc;
  }, {} as ModalVisibilityState);

  const [modalState, setModalState] = useState(initialModalState);

  const toggleModal = (modalKey: string) => {
    setModalState((prev) => ({ ...prev, [modalKey]: !prev[modalKey] }));
  };

  return { modalState, toggleModal };
};

export default useModalState;
