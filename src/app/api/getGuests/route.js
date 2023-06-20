import axios from 'axios';
import apiUrl from '../../config';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const response = await axios.get(`${apiUrl}/guests`);
    const data = response.data;
    return new NextResponse(JSON.stringify(data));
  } catch (error) {
    // console.error(error);
    return new NextResponse('Error occurred', { status: 500 });
  }
}
