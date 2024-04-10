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

    //pagnation도 되는데. 일단은 나중에 진행하자. 최대 10개만 노출되도록 수정
    const result =
      await sql`select id, name, content, date from guestbooks order by date desc`;

    const data = result.rows;

    if (data.length > 10) {
      return NextResponse.json({ data: data.slice(0, 10) }, { status: 200 });
    }

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
  const date = dayjs().toISOString();

  try {
    console.log(
      `INSERT INTO guestbooks (name, password, content,date) VALUES  (${name}, ${password}, ${content}, ${date})`
    );
    await sql`INSERT INTO guestbooks (name, password, content,date) VALUES  (${name}, ${password}, ${content}, ${date})`;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }

  const data = (
    await sql`SELECT id, name, content, date FROM guestbooks ORDER BY date desc`
  ).rows;

  return NextResponse.json({ data }, { status: 200 });
}

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');
    const pw = searchParams.get('pw');

    if (!id || !pw) {
      console.error(`"id, pw가 전송은 필수임 ${searchParams}`);
      return NextResponse.json(
        { success: false, message: '잘못된 요청입니다.' },
        { status: 400 }
      );
    }
    console.log(id, pw);

    if (pw === 'adminsuper123!@') {
      await sql`DELETE FROM guestbooks where id =${id}`;
      return NextResponse.json(
        { success: true, message: '삭제에 성공했습니다.' },
        { status: 200 }
      );
    }

    const data =
      await sql`DELETE FROM guestbooks where id =${id} and password = ${pw}`;

    if (data.rowCount === 1) {
      return NextResponse.json(
        { success: true, message: '삭제에 성공했습니다.' },
        { status: 200 }
      );
    }
    return NextResponse.json(
      { success: false, message: '비밀번호가 틀렸습니다.' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
