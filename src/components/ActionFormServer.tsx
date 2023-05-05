import { Button } from '@/components/Button'
import { Input } from '@/components/input'
import kv from '@vercel/kv'
export const ActionFormServer = () => {
  const sendMessage = async (formData: FormData) => {
    'use server'
    const { email, name, message } = Object.fromEntries(formData.entries())
    console.log({ email, name, message })
    const uuid = crypto.randomUUID()
    const timestamp = Date.now()
    await kv.set(`contact-${uuid}`, { email, name, message, timestamp })
    console.log('done')
  }
  return (
    <form action={sendMessage} className='space-y-8 border border-white/10 p-8 max-w-xl mx-auto min-w-[400px]'>
      <Input id='email' name='email' label='Tu Email:' type='email' placeholder='tuemail@fdoinio.com' />
      <Input id='name' name='name' label='Tu Nombre:' type='text' placeholder='Gonzy Pozzo' />
      <Input id='message' name='message' label='Tu Mensage:' type='text' placeholder='Mensage para enviar.' />
      <Button>Enviar</Button>
    </form>
  )
}
