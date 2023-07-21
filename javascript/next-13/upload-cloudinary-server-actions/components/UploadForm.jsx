'use client';

import { useRef, useState } from 'react';
import PhotoCard from './PhotoCard';
import ButtonSubmit from './ButtonSubmit';
import { uploadPhoto, revalidate } from '@/actions/uploadActions';

export default function UploadForm() {
  const [files, setFiles] = useState([]);
  const formRef = useRef(null); 

  const handleInputFiles = async (e) => {
    const files = e.target.files; // {objects}

    const newFiles = [...files].filter((file) => {
      // [objects]
      if (file.size < 1024 * 1024 && file.type.startsWith('image/')) {
        // Accept image files only less than 1Mb in size
        return file;
      }
    });
    setFiles((prev) => [...newFiles, ...prev]);
    formRef.current.reset()
  };

  const handleDeleteFiles = async (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  };

  const handleUpload = async () => {
    if (!files.length) return alert('No image files are selected.')
    if (files.length > 3) return alert('Upload up to 3 image files.')

    const formData = new FormData()

    files.forEach(file => {
      formData.append('files', file)
    }) 

    const res = await uploadPhoto(formData)
    if (res?.message) alert(`Success: ${res?.message}`)
    if (res?.errorMessage) alert(`Error: ${res?.errorMessage}.`)

    setFiles([])
    formRef.current.reset()
    revalidate('/')
  }

  return (
    <form className='border rounded p-4' action={handleUpload} ref={formRef}>

      <div className='min-h-[200px] my-8 p-4 bg-slate-800'>
        <input onChange={handleInputFiles} type='file' accept='image/*' multiple />
        <h5 className='text-red-400 text-lg py-4'>
          (*) Has accept image files less than 1mb in size. Up to 3 photo files.
        </h5>
        {/* Preview images */}
        <div className='flex gap-4'>
          {files.map((file, index) => (
            <PhotoCard
              onClick={() => handleDeleteFiles(index)}
              url={URL.createObjectURL(file)}
              key={file.name}
            />
          ))}
        </div>
      </div>

      <ButtonSubmit value='Upload to Cloudinary' />
    </form>
  );
}
