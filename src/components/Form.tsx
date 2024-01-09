'use client'
import { BaseComponent, FormState } from '@/types'
import { useFormState } from 'react-dom'
import { SubmitButton } from './SubmitButton'
import { DisplayErrors } from './DisplayError'
import { useEffect, useRef } from 'react'

export interface IFormProps extends BaseComponent {
  action: (prevState: FormState, formData: FormData) => Promise<FormState>
  submitButtonText?: string
}

export const Form = ({
  action,
  submitButtonText,
  children,
  className,
}: IFormProps) => {
  const [state, formAction] = useFormState(action, { data: null, error: null })
  const ref = useRef<HTMLFormElement | null>(null)

  useEffect(() => {
    if (state.data) {
      ref.current?.reset()
    }
  }, [state])

  return (
    <form
      ref={ref}
      action={formAction}
      className='flex flex-col gap-2 items-start'
    >
      {children}
      {state.error ? <DisplayErrors errors={state.error} /> : null}
      {state.data ? (
        <div className='my-2 text-lg font-semibold'>{state.data} 🎉</div>
      ) : null}
      <SubmitButton>{submitButtonText}</SubmitButton>
    </form>
  )
}
