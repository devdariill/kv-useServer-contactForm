import { db } from '@vercel/postgres'

export async function POST (request: Request) {
  let client
  try {
    client = await db.connect()
  } catch (error) {
    console.log(error)
    return new Response('DB error', { status: 500 })
  }
  const { name, email, message } = await request.json()
  if (name == null || email == null || message == null) {
    return new Response('Missing name, email or message', { status: 400 })
  }
  try {
    const { rows } = await client.sql`INSERT INTO messages (name, email, message) VALUES (${name}, ${email}, ${message})`
    console.log(rows)
    return new Response('Contact Saved!', { status: 200 })
  } catch (e) {
    console.error(e)
    // e.statusCode === 'NOT_FOUND' ? console.log('Not found') : console.log('Error')
    return new Response('error', { status: 500 })
  }
}
