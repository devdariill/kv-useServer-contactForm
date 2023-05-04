import kv from '@vercel/kv'
export async function POST (request: Request) {
  const { name, email, message } = await request.json()
  if (name == null || email == null || message == null) {
    return new Response('Missing name, email or message', { status: 400 })
  }
  const uuid = crypto.randomUUID()
  const timestamp = Date.now()
  try {
    await kv.set(`contact-${uuid}`, { name, email, message, timestamp })
    return new Response('Contact Saved!', { status: 200 })
  } catch (e) {
    console.error(e)
    // e.statusCode === 'NOT_FOUND' ? console.log('Not found') : console.log('Error')
    return new Response('error', { status: 500 })
  }
}
