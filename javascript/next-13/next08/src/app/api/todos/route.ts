import { cookies, headers } from 'next/dist/client/components/headers';
import { NextResponse, NextRequest } from 'next/server';

const DATA_SOURCE_URL = 'https://jsonplaceholder.typicode.com/todos';

const API_KEY: string = process.env.DATA_API_KEY as string;

export async function GET() {  
  const res = await fetch(DATA_SOURCE_URL);

  const todos: Todo[] = await res.json();

  return NextResponse.json(todos);
}

// todo issue: https://github.com/vercel/next.js/issues/48096
export async function DELETE(request: Request) {  
  const { id }: Partial<Todo> = await request.json();
  if (!id) return NextResponse.json({ message: 'Todo id required.' });

  // const { searchParams } = new URL(request.url);
  // const id = searchParams.get('_id');

  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json', 
      'API-Key': API_KEY,
    },
  });

  return NextResponse.json({ message: `Todo ${id} deleted` });
  // Given incoming request /home

}

// export async function DELETE(req: Request, { params }: { params: { id: string } }) {
//   const id = params.id
  

//   const headerList = headers()
//   const type = headerList.get('Content-Type')

//   const cookiesList = cookies()
//   const coo2 = cookiesList.get('Cookie_2')?.value

//   // logic delete post
//   // redirect('/blog')

//   return NextResponse.json({ id });
// }
