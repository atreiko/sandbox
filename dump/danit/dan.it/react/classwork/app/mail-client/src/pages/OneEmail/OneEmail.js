import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import Email from '../../components/Email/Email';

// function OneEmail({history, location, match}) {
function OneEmail() {
  const [email, setEmail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { emailId } = useParams();

  useEffect(() => {
    setIsLoading(true)
    axios(`/api/emails/${emailId}`)
      .then(res => {
        setEmail(res.data)
        setIsLoading(false);
      })
  }, [emailId])

  if (isLoading) {
    return <Loader />
  }

  return (
    <div><Email email={email} showFull /></div>
  )
}

export default OneEmail
// export default withRouter(OneEmail)
