const API = `https://jsonplaceholder.typicode.com/photos`;

export default async function getPosts(params) {

  const limit = params.limit * 1 || 3;
  const page = params.page * 1 || 1;
  // const skip = searchParams.skip * 1 || limit * (page - 1);

  try {
    const response = await fetch(`${API}/?_limit=${limit}&_page=${page}`);
    if (!response) {
      throw new Error(error.message || 'Failed to fetch posts.');
    }
    return response.json();
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch posts.');
  }
}
