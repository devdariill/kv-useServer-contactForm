'use client'
import { Button } from '@/components/Button'
import { Input } from '@/components/input'
import { toast } from 'sonner'

export const Form = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const { email, name, message } = Object.fromEntries(formData.entries())
    console.log({ email, name, message })
    fetch('/api/kv-send-message', {
      method: 'POST',
      body: JSON.stringify({ email, name, message }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      form.reset()
      toast.success('Mensaje enviado correctamente')
    }).catch(() => {
      toast.error('Error al enviar el mensaje')
    })
  }
  return (
    <form onSubmit={handleSubmit} className='space-y-8 border border-white/10 p-8 max-w-xl mx-auto min-w-[400px]'>
      <Input id='email' name='email' label='Tu Email:' type='email' placeholder='tuemail@fdoinio.com' />
      <Input id='name' name='name' label='Tu Nombre:' type='text' placeholder='Gonzy Pozzo' />
      <Input id='message' name='message' label='Tu Mensage:' type='text' placeholder='Mensage para enviar.' />
      <Button>Enviar</Button>
    </form>
  )
}
