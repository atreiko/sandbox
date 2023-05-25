import React, { memo, useEffect } from 'react'

function Body({ title, numbers, fetchEmails }) {
  useEffect(() => {
    fetchEmails()
  }, [fetchEmails])

  console.log('Rendering Body.js')
  return (
    <div>
      <h2>Body</h2>
      <div>{title}</div>
      <div>{numbers}</div>
    </div>
  )
}

export default memo(Body)
