import { AnimatePresence, m } from 'framer-motion';
import { RemoveScroll } from 'react-remove-scroll';

import { useModal } from '../../model/modal-store';

import { ModalContainer } from './modal-container';

export const Modal = () => {
  const { closeModal, modal } = useModal();

  return (
    <AnimatePresence>
      {modal ? (
        <RemoveScroll className='fixed inset-0 z-50'>
          <m.button
            animate={{ opacity: 1 }}
            className='fixed w-full h-dvh bg-opacity-70 bg-black z-10'
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={closeModal}
          />
          <ModalContainer>{modal}</ModalContainer>
        </RemoveScroll>
      ) : null}
    </AnimatePresence>
  );
};
