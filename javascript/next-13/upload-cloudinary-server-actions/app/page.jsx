import Image from 'next/image';
import UploadForm from '@/components/UploadForm';
import { getAllPhotos } from '@/actions/uploadActions';
import PhotoList from '@/components/PhotoList';

export default async function Home() {
  const photos = await getAllPhotos()

  return (
    <main>
      <div className='container mx-auto'>
        <h1 className='text-center text-3xl font-medium p-4 mb-8'>Next.JS Server Actions. Upload Image Files</h1>
        <UploadForm />

        <h2 className='text-2xl py-4 mt-4'>All photos</h2>
        <PhotoList photos={photos} />
      </div>
    </main>
  );
}
