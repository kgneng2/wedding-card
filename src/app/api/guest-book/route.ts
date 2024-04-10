import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';
import dayjs from 'dayjs';

const PAGE_SIZE = 5;

const getPageNumber = (page: string): number => {
  try {
    if (/^[0-9]+$/.test(page)) {
      return +page;
    }

    return 1;
  } catch {
    return 1;
  }
};

export const dynamic = 'force-dynamic';

// CREATE TABLE guestbooks (
//   id SERIAL PRIMARY KEY,
//   name VARCHAR(255) NOT NULL,
//   password VARCHAR(255) NOT NULL,
//   content TEXT NOT NULL,
//   date VARCHAR(255) NOT NULL
// );

export async function GET(request: NextRequest) {
  /*
    https://nextjs.org/docs/messages/app-static-to-dynamic-error
    https://nextjs.org/docs/app/building-your-application/rendering/server-components#server-rendering-strategies
    https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming
    https://stackoverflow.com/questions/76957592/error-only-async-functions-are-allowed-to-be-exported-in-a-use-server-file
    https://react.dev/reference/react/use-server
  */
  // 'use server'
  // console.log(request.url)
  // const searchParams = request.nextUrl.searchParams;

  try {
    // console.log(searchParams);
    // const page = searchParams.get('page') || '1';
    // console.log('12314', page);
    // const pageNumber = getPageNumber(page);
    // const offset = (pageNumber - 1) * PAGE_SIZE;
    // const offset = 1;

    const result =
      await sql`select id, name, password, content, date from guestbooks order by date desc`;

    const data = result.rows;
    console.log(data);
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  console.log('1234');
  const formData = await request.formData();
  const name = formData.get('name')?.toString() || 'undefined';
  const password = formData.get('password')?.toString();
  const content = formData.get('content')?.toString();
  const date = dayjs().toString();
  try {
    await sql`INSERT INTO guestbooks (name, password, content) VALUES  (${name}, ${password}, ${content})`;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }

  const data = (await sql`SELECT * FROM guestbooks ORDER BY date desc`).rows;

  return NextResponse.json({ data }, { status: 200 });
}

// export async function remove(request: Request) {
//   try {

//     return NextResponse.json({ }, { status: 200 });
//   } catch(error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }
