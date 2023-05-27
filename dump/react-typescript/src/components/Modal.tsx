import React from 'react'

interface ModalProps {
  children: React.ReactNode
  title: string
  onClose: () => void
}


const Modal = ({ children, title, onClose }: ModalProps) => {
  return (
    <>
      <div 
        className='fixed top-0 right-0 left-0 bottom-0 bg-black/50'
        onClick={onClose}
      />
      <div
        className='absolute left-1/2 -translate-x-1/2 top-10 bg-white w-[500px] p-5 rounded'
      >
        <h1 className='text-2xl text-center mb-2'>{title}</h1>
        {children}
      </div>
    </>
  ) 
}

export default Modal