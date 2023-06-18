'use client';

import { useRef } from 'react';
import { createPost, updatePost } from '@/actions/postActions';
import ButtonSubmit from './ButtonSubmit';
import { useMyContext } from '@/context/Provider';

export default function PostForm() {
  const formRef = useRef(null);
  const { editPost, setEditPost } = useMyContext();

  const handleAction = async (formData) => {
    const title = formData.get('title');
    const image = formData.get('image');

    if (editPost) {
      await updatePost({ title, image, id: editPost._id })
    } else {
      await createPost({ title, image });
    }

    setEditPost()
    formRef.current.reset();
  };

  return (
    <div className='grid place-content-center mt-4'>
      <form className='flex gap-4 border rounded p-4' action={handleAction} ref={formRef}>
        <input
          className='text-black p-2 rounded'
          type='text'
          name='title'
          placeholder='title'
          required
          defaultValue={editPost?.title}
        />
        <input
          className='text-black p-2 rounded'
          type='text'
          name='image'
          placeholder='image'
          required
          defaultValue={editPost?.image}
        />
        {editPost ? (
          <>
            <ButtonSubmit value='Update' />
            <ButtonSubmit value='Cancel' onClick={() => setEditPost()} />
          </>
        ) : (
          <ButtonSubmit value='Create' />
        )}
      </form>
    </div>
  );
}
