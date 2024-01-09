import { loginAction } from '@/actions/loginAction'
import { Form } from '@/components/Form'
import { FormState } from '@/types'

export default function Home() {
  return (
    <main>
      <Form action={loginAction} submitButtonText='Login'>
        <input
          placeholder='Enter the email'
          className='border rounded px-3 py-1'
          name='email'
        />
        <input
          placeholder='******'
          className='border rounded px-3 py-1'
          name='password'
          type='password'
        />
      </Form>
    </main>
  )
}
