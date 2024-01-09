import { ReactNode } from 'react'
import { ZodIssue } from 'zod'

export type ValidationError = Partial<Pick<ZodIssue, 'path' | 'message'>>

export interface FormState {
  data?: string | null
  error?: ValidationError[] | null
}

export type BaseComponent = {
  children?: ReactNode
  className?: string
}
