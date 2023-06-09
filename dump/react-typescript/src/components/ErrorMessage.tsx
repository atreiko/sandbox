import React from 'react'

interface ErrorMessageProps {
  error: string
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <div className='text-center text-red-600'>{error}</div>
  )
}

export default ErrorMessage