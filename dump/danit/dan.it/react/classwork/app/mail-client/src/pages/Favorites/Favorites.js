import React from 'react'
import Email from '../../components/Email/Email';
import { emailsLoadingSelector, getEmailsSelector } from '../../store/emails/selectors';
import Loader from '../../components/Loader/Loader';
import { connect } from 'react-redux';

export function Favorites({ emails, isLoading }) {
  if (isLoading) {
    return <Loader />;
  }

  const emailCards = emails
    .filter(e => e.favorite)
    .map(e => <Email key={e.id} email={e} />);

  return (
    <div>
      {emailCards}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    emails: getEmailsSelector(state),
    isLoading: emailsLoadingSelector(state)
  }
}

export default connect(mapStateToProps)(Favorites)
