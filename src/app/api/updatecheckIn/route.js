import axios from 'axios';
import apiUrl from '../../config';
import { NextResponse } from 'next/server';

export async function PUT(request) {
  try {
  
    const {email} = await request.json()
    // console.log("email", email)

    await axios.put(`${apiUrl}/guests/${email}`);
    return new NextResponse('Guest check-in updated successfully');
  } catch (error) {
    console.error(error);
    return new NextResponse('Error occurred', { status: 500 });
  }
}
