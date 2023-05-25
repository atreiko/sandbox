import React, { useEffect } from 'react';
import Email from '../../components/Email/Email';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { emailsLoadingSelector, getEmailsSelector } from '../../store/emails/selectors';
import Loader from '../../components/Loader/Loader';
import { getEmailsOperation as getEmails } from '../../store/emails/operations';
import useTimeout from '../../hooks/useTimeout';
import Animate from '../../components/Animate/Animate';

const Inbox = () => {
  const dispatch = useDispatch();
  const emails = useSelector(getEmailsSelector);
  const isLoading = useSelector(emailsLoadingSelector);

  useEffect(() => {
    dispatch(getEmails());
  }, [dispatch]);

  const timeoutEmails = useTimeout(emails);

  if (isLoading) {
    return <Loader />;
  }

  const emailCards = timeoutEmails.map(e => <Animate duration={2000} key={e.id}><Email email={e} /></Animate>);

  return (
    <div>
      <div>
        {emailCards}
      </div>
    </div>
  );
}

Inbox.propTypes = {
  // emails: PropTypes.arrayOf(PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   topic: PropTypes.string.isRequired
  // })).isRequired,
  title: PropTypes.string,
  incrementAge: PropTypes.func,
  updateTitle: PropTypes.func
}

export default Inbox;