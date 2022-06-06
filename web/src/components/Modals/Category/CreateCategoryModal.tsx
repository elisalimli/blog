import Button from '@/ui/buttons/Button';
import InputField from '@/ui/Form/InputField';
import Modal from '@/ui/Modal/Modal';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import Dropzone from 'react-dropzone';
import { useCreateCategoryMutation } from '@/generated/graphql';

const CreatePostModal = () => {
  const [_, createCategory] = useCreateCategoryMutation();

  return (
    <Modal openModalText='+ Create a new one'>
      <Modal.Header>Create Category</Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            name: '',
            files: [],
          }}
          onSubmit={async ({ name, files }) => {
            // picking only first image of array
            console.log('props input', name, files);
            const file = files[0];
            console.log('file', file);

            const a = await createCategory({
              input: {
                name,
                file: files[0],
              },
            });
            console.log('a', a);
          }}
        >
          {({ setFieldValue }) => (
            <Form className='mt-12 space-y-4'>
              <InputField
                name='name'
                label='Name'
                placeholder='Enter category name...'
              />
              <Dropzone
                onDrop={(acceptedFiles) =>
                  setFieldValue('files', acceptedFiles)
                }
              >
                {({ getRootProps, getInputProps, isDragAccept }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      {isDragAccept ? (
                        <p>active file</p>
                      ) : (
                        <p>
                          Drag drop some files here, or click to select files
                        </p>
                      )}
                    </div>
                  </section>
                )}
              </Dropzone>
              <Modal.Footer>
                <Button type='submit' className='ml-2 px-4'>
                  Create
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
