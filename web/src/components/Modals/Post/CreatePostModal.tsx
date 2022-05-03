import { Formik, Form } from 'formik';
import React from 'react';
import ReactModal from 'react-modal';
import Button from '../../../ui/buttons/Button';
import Divider from '../../../ui/Divider';
import InputField from '../../../ui/InputField';
import { useMediaQuery } from 'react-responsive';
import defaultTheme from 'tailwindcss/defaultTheme';

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
ReactModal.setAppElement('#__next');

// // Card.react.js
const Modal: React.FC = ({ children }) => <>{children}</>;

const Main: React.FC = ({ children }) => <>{children}</>;

const Footer: React.FC = ({ children }) => (
  <div className='my-4 flex justify-end'>
    <Button variant='light'>Close</Button>
    {children}
  </div>
);

const Header: React.FC = ({ children }) => (
  <h1 className='text-4xl text-gray-900'>{children}</h1>
);

Modal.Header = Header;
Modal.Main = Main;
Modal.Footer = Footer;
// export default Modal;

// // Usage
// import Card from "./Card.react.js";

// const App = () => (
//   <Card>
//     <Card.Body />
//   </Card>
// );

const CreatePostModal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const isMobile = useMediaQuery({ maxWidth: defaultTheme.screens.md });

  const customStyles: ReactModal.Styles = {
    content: {
      top: '50%',
      left: '50%',
      // right: 'auto',
      bottom: 'auto',
      // marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: isMobile ? '100%' : '75vw',
      maxWidth: defaultTheme.screens.md,
    },
    overlay: {
      background: 'rgba(0,0,0,.8)',
    },
  };
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <ReactModal
        style={customStyles}
        // htmlOpenClassName='top-1/2 left-1/2 bottom-auto '
        onRequestClose={closeModal}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        contentLabel='Example Modal'
      >
        <Modal>
          <Modal.Header>Create post</Modal.Header>
          <Modal.Main>
            <Formik
              initialValues={{ title: '', tags: '', url: '', category: '' }}
              onSubmit={async (props) => {
                console.log('props', props);
                //   router.push({
                //     pathname: '/search',
                //     query: { query: search },
                //   });
              }}
            >
              {() => (
                <Form className='mt-12'>
                  <InputField
                    name='title'
                    label='Title'
                    placeholder='Enter title...'
                  />
                  <Divider className='mt-2 border-transparent' />
                  <InputField
                    name='url'
                    label='Url'
                    placeholder='Enter youtube video url...'
                  />
                  <Divider className='mt-2 border-transparent' />

                  <Divider className='mt-2 border-transparent' />
                  <InputField
                    name='tags'
                    label='Tags'
                    placeholder='Enter video tag(s)...'
                  />
                  <Divider className='mt-2 border-transparent' />
                  <InputField
                    name='category'
                    label='Category'
                    placeholder='Enter video category'
                  />
                  <Modal.Footer>
                    <Button type='submit' className='ml-2 px-4'>
                      Post
                    </Button>
                  </Modal.Footer>
                </Form>
              )}
            </Formik>
          </Modal.Main>
        </Modal>
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <button onClick={closeModal}>close</button>
        {/* <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form> */}
      </ReactModal>
    </div>
  );
};

export default CreatePostModal;
