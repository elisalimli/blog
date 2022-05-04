import Modal from '@/ui/Modal/Modal';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import Button from '@/ui/buttons/Button';
import Divider from '@/ui/Divider';
import InputField from '@/ui/Form/InputField';
import Creatable from 'react-select/creatable';
import { useTagsQuery } from '@/generated/graphql';
import Label from '../../../ui/Form/Label';

const CreatePostModal = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  const [{ data }] = useTagsQuery();
  const arr = [];
  data?.tags?.map((i) =>
    arr.push({
      label: i.name,
      value: i.name,
    })
  );
  return (
    <Modal openModalText='+ Create a new one'>
      <Modal.Header>Create post</Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{ title: '', tags: [], url: '', category: '' }}
          onSubmit={async (props) => {
            console.log('props', props);
            //   router.push({
            //     pathname: '/search',
            //     query: { query: search },
            //   });
          }}
        >
          {({ setFieldValue }) => (
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
              <div>
                <Label fieldName='tags'>Tags</Label>
                <Creatable
                  name='tags'
                  isMulti
                  onChange={(tagsArr) => setFieldValue('tags', tagsArr)}
                  options={arr}
                />
              </div>
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
