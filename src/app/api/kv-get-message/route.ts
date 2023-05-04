import kv from '@vercel/kv'
import { NextResponse } from 'next/server'
export async function GET () {
  try {
    const keys = await kv.keys('contact-*')
    const messages = await kv.mget(...keys)
    return NextResponse.json({ keys, messages })
  } catch (e) {
    console.error(e)
    // e.statusCode === 'NOT_FOUND' ? console.log('Not found') : console.log('Error')
    return new Response('error', { status: 500 })
  }
}
