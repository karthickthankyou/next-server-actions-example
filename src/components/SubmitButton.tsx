'use client'
import { BaseComponent } from '@/types'
import React from 'react'
import { useFormStatus } from 'react-dom'

export const SubmitButton = ({ children, className }: BaseComponent) => {
  const { pending } = useFormStatus()

  return (
    <button type='submit' className={className}>
      {pending ? 'Loading...' : children}
    </button>
  )
}
