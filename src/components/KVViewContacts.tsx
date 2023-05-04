import kv from '@vercel/kv'

export const KVViewContacts = async () => {
  const keys = await kv.keys('contact-*')
  return <small className='text-center block '>{keys.length} contactos realizados</small>
}
