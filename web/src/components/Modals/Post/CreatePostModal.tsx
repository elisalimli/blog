import Modal from '@/ui/Modal/Modal';
import { Form, Formik } from 'formik';
import React from 'react';
import Button from '@/ui/buttons/Button';
import Divider from '@/ui/Divider';
import InputField from '@/ui/InputField';

const CreatePostModal = () => {
  return (
    <Modal openModalText='+ Create a new one'>
      <Modal.Header>Create post</Modal.Header>
      <Modal.Body>
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
            <Form className='mt-12 space-y-4'>
              <InputField
                name='title'
                label='Title'
                placeholder='Enter title...'
              />
              <InputField
                name='url'
                label='Url'
                placeholder='Enter youtube video url...'
              />
              <InputField
                name='tags'
                label='Tags'
                placeholder='Enter video tag(s)...'
              />
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
      </Modal.Body>
    </Modal>
  );
};

export default CreatePostModal;
