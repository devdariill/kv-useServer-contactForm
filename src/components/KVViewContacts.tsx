import kv from '@vercel/kv'

export const revalidate = 0
export const KVViewContacts = async () => {
  const keys = await kv.keys('contact-*')
  return <small className='text-center block '><span id='count-views'>{keys.length}</span> contactos realizados</small>
}
