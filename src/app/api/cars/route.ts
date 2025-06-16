import { NextRequest } from 'next/server';

const EXTERNAL_API_URL = process.env.NEXT_PUBLIC_API_ORIGIN || 'https://testing-api.ru-rating.ru'; 

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  const page = searchParams.get('_page') || '1';
  const limit = searchParams.get('_limit') || '10';
  const sort = searchParams.get('sort') || '';
  const order = searchParams.get('_order') || '';

  const queryParams = new URLSearchParams();
  queryParams.append('_page', page);
  queryParams.append('_limit', limit);

  if (sort) queryParams.append('sort', sort);
  if (order) queryParams.append('_order', order);

  const SERVICE_URL = `${EXTERNAL_API_URL}/cars`;

  try {
    const externalResponse = await fetch(`${SERVICE_URL}?${queryParams.toString()}`);

    if (!externalResponse.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
        status: externalResponse.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await externalResponse.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error fetching external API:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
