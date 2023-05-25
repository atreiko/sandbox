import React from 'react';
import './Header.scss';
import PropTypes from 'prop-types';
import { getUserSelector } from '../../store/user/selectors'
import { connect } from 'react-redux';

export const Header = (props) => {
  const { title, user } = props;

  return (
    <div className='header'>
      <h2 className='header__title'>Header</h2>
      <div id='header-title' data-testid='testTitle'>{title}</div>
      {!!user && <div id='user-login'>{user.login}</div>}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  user: PropTypes.object
}

Header.defaultProps = {
  title: 'Default title'
}

const mapStateToProps = (state) => {
  return {
    user: getUserSelector(state)
  }
}

export default connect(mapStateToProps)(Header);