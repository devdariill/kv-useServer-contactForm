'use client'
import { Button } from '@/components/Button'
import { Input } from '@/components/input'
export const Form = () => {
  return (
    <form className='space-y-8 border border-white/10 p-8 max-w-xl mx-auto min-w-[400px]'>
      <Input id='email' name='email' label='Tu Email:' type='email' placeholder='tuemail@fdoinio.com' />
      <Input id='name' name='name' label='Tu Nombre:' type='text' placeholder='Gonzy Pozzo' />
      <Input id='message' name='message' label='Tu Mensage:' type='text' placeholder='Mensage para enviar.' />
      <Button>Enviar</Button>
    </form>
  )
}
