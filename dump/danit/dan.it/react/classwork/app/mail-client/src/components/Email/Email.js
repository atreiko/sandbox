import React from 'react';
import PropTypes from 'prop-types';
import './Email.scss';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleFavoritesAction } from '../../store/emails/actions';

const Email = (props) => {
  const { email, showFull } = props;
  const history = useHistory();
  const dispatch = useDispatch();

  const goToPrevious = () => {
    if (email.id > 1) {
      history.push(`/emails/${email.id - 1}`)
    }
  }

  const goToNext = () => {
    history.push(`/emails/${email.id + 1}`)
  }

  const toggleFavorites = () => {
    dispatch(toggleFavoritesAction(email));
  }

  return (
    <div className='email'>
      <div className='email__topic'>
        <Link to={`/emails/${email.id}`}>{email.topic}</Link>
        <Icon type='star' color='gold' filled={email.favorite} onClick={toggleFavorites} />
      </div>
      {showFull && <div className='email__body'>{email.body}</div>}
      {
        showFull && (
          <div className='email__controls'>
            <Button title='Previous' onClick={goToPrevious} />
            <Button title='Next' onClick={goToNext} />
          </div>
        )
      }
    </div>
  )
}

// string, object, number, func, bool, array, symbol
// shape(), oneOfType([]), arrayOf(), // exact(), oneOf([]), instanceOf()
Email.propTypes = {
  email: PropTypes.shape({
    id: PropTypes.number.isRequired,
    topic: PropTypes.string.isRequired
  }).isRequired,
}

// const mapStateToProps = (state, props) => {
//   const isFavorite = state.favorite.data.includes(props.email.id)
//   return {
//     isFavorite
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     someFunc: () => dispatch(someAction())
//   }
// }

export default Email