'use server'
import { formSchemaLogin } from '@/forms/login'
import { FormState } from '@/types'
import { checkCredentials } from '@/util'

export async function loginAction(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  console.log('1. ', formData)
  console.log('2. ', formData.entries())
  console.log('3. ', Object.fromEntries(formData.entries()))
  const rawFormData = Object.fromEntries(formData.entries())

  const result = formSchemaLogin.safeParse(rawFormData)

  if (!result.success) {
    return { error: result.error.issues }
  }

  const { email, password } = result.data

  const { data, error } = await checkCredentials({ email, password })

  if (data) {
    return { data: 'Logged In successfully.' }
  }

  if (error) {
    error.toString
    return { error: [{ message: error.toString() }] }
  }

  return {}
}
