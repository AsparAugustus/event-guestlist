import axios from 'axios';
import apiUrl from '../../config';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    console.log("I got here")
    const guest = await request.json()

    console.log(guest, "guestsss")

    // console.log("guest", guest)
    const response = await axios.post(`${apiUrl}/guests`, guest);
    return new NextResponse('Guest added successfully');
  } catch (error) {
    // console.error(error);
    return new NextResponse('Error occurred', { status: 500 });
  }
}
