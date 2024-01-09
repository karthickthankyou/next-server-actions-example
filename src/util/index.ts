export const checkCredentials = async ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  const validEmail = 'example@email.com'
  const validPassword = 'password123'

  await new Promise((resolve) => setTimeout(resolve, 2000))

  if (email === validEmail && password === validPassword) {
    return { data: 'Login successful!' }
  } else {
    return { error: 'Invalid email or password' }
  }
}

export const focusOnErrorPath = (errorPath?: string | number) => {
  if (!errorPath) {
    return
  }

  const inputElement = document.getElementsByName(
    errorPath.toString(),
  )[0] as HTMLInputElement

  if (inputElement) {
    inputElement.focus()
  }
}
