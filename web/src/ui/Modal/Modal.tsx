/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import ReactModal from 'react-modal';
import { useMediaQuery } from 'react-responsive';
import defaultTheme from 'tailwindcss/defaultTheme';
import Body from '@/ui/Modal/Body';
import Footer from '@/ui/Modal/Footer';
import Header from '@/ui/Modal/Header';
import Button from '@/ui/buttons/Button';

// For react-modal
ReactModal.setAppElement('#__next');

const Modal: React.FC<{
  openModalText: string;
}> & {
  Header: React.FC;
  Body: React.FC;
  Footer: React.FC;
} = ({ children, openModalText }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // @ts-ignore
  const isMobile = useMediaQuery({ maxWidth: defaultTheme!.screens!.md });

  const customStyles: ReactModal.Styles = {
    content: {
      top: '50%',
      left: '50%',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      height: '600px',
      width: isMobile ? '100%' : '75vw',
      // @ts-ignore
      maxWidth: defaultTheme!.screens!.md,
    },
    overlay: {
      background: 'rgba(0,0,0,.8)',
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Button variant='light' onClick={openModal}>
        {openModalText}
      </Button>
      <ReactModal
        style={customStyles}
        onRequestClose={closeModal}
        isOpen={modalIsOpen}
        contentLabel='Modal'
      >
        {children as any}
      </ReactModal>
    </div>
  );
};

Modal.Body = Body;
Modal.Footer = Footer;
Modal.Header = Header;

export default Modal;
