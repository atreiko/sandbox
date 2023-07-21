'use client';

import { deletePhoto } from '@/actions/uploadActions';
import PhotoCard from './PhotoCard';

export default function PhotoList({ photos }) {
  const handleDeletePhoto = async (public_id) => {
    await deletePhoto(public_id)
  };

  return (
    <div className='flex gap-4'>
      {photos.map((photo) => (
        <PhotoCard
          onClick={() => handleDeletePhoto(photo?.public_id)}
          key={photo?.public_id}
          url={photo?.secure_url}
        />
      ))}
    </div>
  );
}
