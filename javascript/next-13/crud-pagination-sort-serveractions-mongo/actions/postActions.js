'use server';

import connectDB from '@/lib/mongoose';
import Post from '@/models/postModel';
import { revalidatePath } from 'next/cache';

connectDB();

export async function getOnePost(postId) {
  try {
    const post = await Post.findById(postId);

    return { ...post._doc, _id: post._doc._id.toString() };
  } catch (error) {
    throw new Error(error.message || 'Failed to get one post.');
  }
}

export async function deletePost(postId) {
  try {
    const post = await Post.findByIdAndDelete(postId, { new: true });

    revalidatePath('/');

    return { ...post._doc, _id: post._id.toString() };
  } catch (error) {
    throw new Error(error.message || 'Failed to delete post.');
  }
}

export async function updatePost({ title, image, id }) {
  try {
    const post = await Post.findByIdAndUpdate(id, { title, image }, { new: true });

    revalidatePath('/');

    return { ...post._doc, _id: post._id.toString() };
  } catch (error) {
    throw new Error(error.message || 'Failed to update post.');
  }
}

export async function createPost(data) {
  try {
    const newPost = await new Post(data);

    await newPost.save();
    revalidatePath('/');

    return { ...newPost._doc, _id: newPost.id.toString() };
  } catch (error) {
    throw new Error(error.message || 'Failed to create post.');
  }
}

export async function getAllPosts(searchParams) {
  const search = searchParams.search || '';
  const sort = searchParams.sort || 'createdAt';

  const limit = searchParams.limit * 1 || 3;
  const page = searchParams.page * 1 || 1;
  const skip = searchParams.skip * 1 || limit * (page - 1);

  try {
    const posts = await Post.find({ title: { $regex: search } })
      .sort(sort)
      .limit(limit)
      .skip(skip);

    // if (posts) throw new Error('Posts error!')

    const count = await Post.find({ title: { $regex: search } }).count()
    const totalPages = Math.ceil(count / limit)

    const newData = posts.map((post) => ({
      ...post._doc,
      _id: post._doc._id.toString(),
    }));

    return { posts: newData, count, totalPages };
  } catch (error) {
    throw new Error(error.message || 'Failed to get all posts.');
  }
}
