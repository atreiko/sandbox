'use server';

import fs from 'fs/promises';
import os from 'os';
import path from 'path';
import cloudinary from 'cloudinary';
import { v4 as uuidv4 } from 'uuid';
import { revalidatePath } from 'next/cache';
import Photo from '@/models/photoModel';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export async function revalidate(path) {
  revalidatePath(path);
}

async function savePhotosToLocal(formData) {
  const files = formData.getAll('files');

  const multipleBuffersPromise = files.map((file) =>
    file.arrayBuffer().then((data) => {
      const buffer = Buffer.from(data);
      const name = uuidv4();
      const ext = file.type.split('/')[1]; // jpeg

      const tempdir = os.tmpdir();
      const uploadDir = path.join(tempdir, `/${name}.${ext}`);
      fs.writeFile(uploadDir, buffer);

      return {
        filepath: uploadDir,
        filename: file.name, // pentagram.jpeg
      };
    })
  );

  return await Promise.all(multipleBuffersPromise);
}

async function uploadPhotosToCloudinary(newFiles) {
  const multiplePhotosPromise = newFiles.map((file) =>
    cloudinary.v2.uploader.upload(file.filepath, { folder: 'nextjs_upload' })
  );

  return await Promise.all(multiplePhotosPromise);
}

export async function uploadPhoto(formData) {
  try {
    const newFiles = await savePhotosToLocal(formData);
    const photos = await uploadPhotosToCloudinary(newFiles);

    newFiles.map((file) => fs.unlink(file.filepath));
    // await delay(2000)
    // revalidatePath('/');

    const newPhotos = photos.map((photo) => {
      const newPhoto = new Photo({
        public_id: photo?.public_id,
        secure_url: photo?.secure_url,
      });

      return newPhoto;
    });

    await Photo.insertMany(newPhotos);

    return { message: 'Upload Success!' };
  } catch (error) {
    return { errorMessage: error.message };
  }
}

export async function getAllPhotos() {
  try {
    // todo get all photos from Cloudinary
    // const { resources } = await cloudinary.v2.search
    //   .expression('folder: nextjs_upload/*')
    //   .sort_by('created_at', 'desc')
    //   .max_results(500)
    //   .execute();

    // todo get all photos from MongoDB
    const photos = await Photo.find().sort('-createdAt');

    const resources = photos.map((photo) => ({ ...photo._doc, _id: photo._id.toString() }));

    return resources;
  } catch (error) {
    return { errorMessage: error.message };
  }
}

export async function deletePhoto(public_id) {
  try {
    await Promise.all([
      Photo.findOneAndDelete({ public_id }),
      cloudinary.v2.uploader.destroy(public_id),
    ]);

    revalidate('/');
    return { message: 'Delete Success!' };
  } catch (error) {
    return { errorMessage: error.message };
  }
}
